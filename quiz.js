
// ========================================
// FONCTIONNEMENT DU QUIZ POWER BI
// ========================================

// ========================================
// GESTION DES SÉRIES
// ========================================

const series = {
  1: serie01,
  2: serie02,
  3: serie03,
  4: serie04
};

let serieActive = 1;

function choisirSerie(numero) {
  if (!series[numero]) {
    alert("Cette série n'existe pas.");
    return;
  }

  serieActive = numero;
  start('all');
}

// ========================================
// VARIABLES
// ========================================

let seq = [];
let idx = 0;
let good = 0;
let errors = [];
let locked = false;

// Une entrée par question.
// null = non validée
// { response, correct } = validée
let answers = [];

const $ = id => document.getElementById(id);

// ========================================
// AFFICHAGE DES PAGES
// ========================================

function view(id) {
  ['intro', 'quiz', 'result'].forEach(x => {
    $(x).classList.toggle('hidden', x !== id);
  });
}

// ========================================
// OUTILS
// ========================================

function optionText(option) {
  if (typeof option === 'string') {
    return option.replace(/\s*\|\s*/g, ' · ');
  }

  if (option && typeof option === 'object') {
    return [
      option.title,
      option.text,
      option.details
    ].filter(Boolean).join(' · ');
  }

  return String(option ?? '');
}

function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

// Ignore la casse et les espaces dans les expressions DAX.
function normalizeDax(value) {
  return String(value ?? '').replace(/\s+/g, '').toUpperCase();
}

function makeTextInput(id, value = '', disabled = false) {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = id;
  input.className = 'fill-input';
  input.autocomplete = 'off';
  input.value = value;
  input.disabled = disabled;
  return input;
}

function createOptionContent(option) {
  const container = document.createElement('span');
  container.className = 'option-content';
  container.style.display = 'block';
  container.style.minWidth = '0';

  if (typeof option === 'string') {
    const parts = option.split(/\s+\|\s+/);

    if (parts.length > 1) {
      const heading = document.createElement('strong');
      heading.textContent = parts[0];
      heading.style.display = 'block';
      container.append(heading);

      parts.slice(1).forEach(part => {
        const line = document.createElement('span');
        line.textContent = part;
        line.style.display = 'block';
        line.style.marginTop = '4px';
        container.append(line);
      });
    } else {
      container.textContent = option;
    }

    return container;
  }

  if (option && typeof option === 'object') {
    if (option.title) {
      const heading = document.createElement('strong');
      heading.textContent = option.title;
      heading.style.display = 'block';
      container.append(heading);
    }

    if (option.text) {
      const text = document.createElement('span');
      text.textContent = option.text;
      text.style.display = 'block';
      text.style.marginTop = '4px';
      container.append(text);
    }

    if (option.details) {
      const details = document.createElement('span');
      details.textContent = option.details;
      details.style.display = 'block';
      details.style.marginTop = '6px';
      details.style.whiteSpace = 'pre-line';
      container.append(details);
    }

    if (option.image) {
      const image = document.createElement('img');
      image.src = option.image;
      image.alt = option.title || 'Illustration de la réponse';
      image.style.display = 'block';
      image.style.maxWidth = '100%';
      image.style.maxHeight = '260px';
      image.style.objectFit = 'contain';
      image.style.marginTop = '10px';
      image.style.borderRadius = '6px';
      container.append(image);
    }

    return container;
  }

  container.textContent = String(option ?? '');
  return container;
}

// ========================================
// DÉMARRAGE DU QUIZ
// ========================================

function start(mode = 'all') {
  let questions = [];

  if (mode === 'errors') {
    questions = errors.slice();

  } else if (mode === 'random') {
    questions = Object.values(series).flat();

    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [
        questions[j],
        questions[i]
      ];
    }

  } else {
    questions = series[serieActive].slice();
  }

  if (!questions.length) {
    alert(
      mode === 'errors'
        ? 'Aucune erreur enregistrée.'
        : 'Aucune question disponible.'
    );
    return;
  }

  seq = questions;
  idx = 0;
  good = 0;
  errors = [];
  locked = false;

  // Réinitialiser l'historique
  answers = Array(seq.length).fill(null);

  render();
  view('quiz');
}

// ========================================
// NAVIGATION LATÉRALE
// ========================================

function renderNavigation() {
  const nav = $('question-nav');

  if (!nav) return;

  nav.replaceChildren();

  seq.forEach((q, i) => {
    const button = document.createElement('button');
    const state = answers[i];

    button.type = 'button';
    button.className = 'nav-question';

    if (state) {
      if (q.verified !== true) {
        button.classList.add('unanswered');
      } else {
        button.classList.add(
          state.correct ? 'correct' : 'incorrect'
        );
      }
    } else {
      button.classList.add('unanswered');
    }

    if (i === idx) {
      button.classList.add('active');
      button.setAttribute('aria-current', 'step');
    }

    let icon = '○';

    if (state && q.verified === true) {
      icon = state.correct ? '✓' : '✕';
    } else if (state) {
      icon = '•';
    }

    button.textContent = `${icon} Question ${i + 1}`;

    button.onclick = () => goToQuestion(i);

    nav.append(button);
  });
}

function goToQuestion(index) {
  if (index < 0 || index >= seq.length) return;

  idx = index;
  render();

  // Revenir en haut de la question
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ========================================
// AFFICHAGE D'UNE QUESTION
// ========================================

function render() {
  const q = seq[idx];
  const state = answers[idx];

  locked = state !== null;

  $('counter').textContent =
    `Question ${idx + 1}/${seq.length}`;

  $('score').textContent = `${good} correcte(s)`;

  // Progression basée sur les questions validées
  const completed = answers.filter(a => a !== null).length;

  $('bar').style.width =
    `${completed / seq.length * 100}%`;

  $('title').textContent = q.title;

  if (q.image) {
    $('image').src = q.image;
    $('image').style.display = '';
  } else {
    $('image').removeAttribute('src');
    $('image').style.display = 'none';
  }

  if (q.full || q.image) {
    $('fullimage').src = q.full || q.image;
  } else {
    $('fullimage').removeAttribute('src');
  }

  $('feedback').className = 'feedback hidden';

  $('check').classList.toggle('hidden', locked);
  $('next').classList.toggle('hidden', !locked);

  $('pending').classList.toggle(
    'hidden',
    q.verified === true
  );

  $('opts').replaceChildren();

  // ========================================
  // RÉPONSE LIBRE
  // ========================================

  if (q.type === 'matching_text') {
    const intro = document.createElement('p');
    intro.textContent = 'Saisis la lettre du pictogramme correspondant à chaque rôle (A à E).';
    $('opts').append(intro);
    q.options.forEach((role, i) => {
      const line = document.createElement('label');
      line.className = 'fill-row';
      const text = document.createElement('span');
      text.textContent = role;
      const input = makeTextInput(`match-${i}`, state?.response?.[i] ?? '', !!state);
      input.maxLength = 1;
      input.placeholder = 'A–E';
      input.setAttribute('aria-label', role);
      line.append(text, input);
      $('opts').append(line);
    });
  } else if (q.type === 'dropdown') {
    const sentence = document.createElement('div');
    sentence.className = 'fill-sentence';
    const parts = q.text.split(/\{(\d+)\}/g);
    parts.forEach((part, i) => {
      if (i % 2 === 0) {
        sentence.append(document.createTextNode(part));
      } else {
        const n = Number(part);
        const select = document.createElement('select');
        select.id = `dropdown-${n}`;
        select.className = 'fill-select';
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Choisir…';
        select.append(placeholder);
        q.dropdowns[n].forEach(choice => {
          const option = document.createElement('option');
          option.value = choice;
          option.textContent = choice;
          select.append(option);
        });
        select.value = state?.response?.[n] ?? '';
        select.disabled = !!state;
        sentence.append(select);
      }
    });
    $('opts').append(sentence);
  } else if (q.type === 'text') {
    if (q.formula) {
      const formula = document.createElement('pre');
      formula.className = 'fill-formula';
      const segments = q.formula.split('_____');
      formula.append(document.createTextNode(segments[0]));
      const input = makeTextInput('text-answer', state?.response ?? '', !!state);
      input.placeholder = 'Fonction DAX';
      input.setAttribute('aria-label', 'Fonction DAX manquante');
      formula.append(input, document.createTextNode(segments.slice(1).join('_____')));
      $('opts').append(formula);
    } else {
      const line = document.createElement('label');
      line.className = 'fill-row';
      if (q.prefix) {
        const prefix = document.createElement('strong');
        prefix.textContent = q.prefix;
        line.append(prefix);
      }
      const input = makeTextInput('text-answer', state?.response ?? '', !!state);
      input.placeholder = 'Saisis ta formule DAX';
      line.append(input);
      $('opts').append(line);
    }
  } else {
    q.options.forEach((option, i) => {

      if (q.type === 'tf') {
        const row = document.createElement('div');
        row.className = 'tf';

        row.append(createOptionContent(option));

        for (const val of ['true', 'false']) {
          const label = document.createElement('label');
          const input = document.createElement('input');

          input.type = 'radio';
          input.name = 'tf' + i;
          input.value = val;

          if (state) {
            input.checked =
              state.response[i] === (val === 'true');
            input.disabled = true;
          }

          label.append(
            input,
            document.createTextNode(
              val === 'true' ? 'Vrai' : 'Faux'
            )
          );

          row.append(label);
        }

        $('opts').append(row);

      } else {
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.className = 'opt';

        input.type =
          q.type === 'multiple'
            ? 'checkbox'
            : 'radio';

        input.name =
          q.type === 'multiple'
            ? 'multiple'
            : 'choice';

        input.value = i;

        if (state) {
          input.checked =
            q.type === 'multiple'
              ? state.response.includes(i)
              : state.response === i;

          input.disabled = true;
        }

        label.append(
          input,
          createOptionContent(option)
        );

        $('opts').append(label);
      }
    });
  }

  if (state) {
    showFeedback(q, state.correct);
  }

  $('next').textContent =
    idx === seq.length - 1
      ? 'Voir mon résultat'
      : 'Question suivante →';

  renderNavigation();
}

// ========================================
// RÉPONSE ATTENDUE
// ========================================

function getExpectedAnswer(q) {
  if (q.type === 'tf') {
    return q.answer.map(
      (v, i) => `${i + 1} : ${v ? 'Vrai' : 'Faux'}`
    ).join(' · ');
  }

  if (q.type === 'multiple') {
    return q.answer.map(
      i => optionText(q.options[i])
    ).join(' ; ');
  }

  if (q.type === 'matching_text') {
    return q.options.map((role, i) => `${role} : ${q.answer[i]}`).join(' · ');
  }

  if (q.type === 'dropdown') {
    return q.answer.join(' / ');
  }

  if (q.type === 'text') {
    return Array.isArray(q.answer)
      ? q.answer.join(' / ')
      : String(q.answer ?? '');
  }

  return optionText(q.options[q.answer]);
}

// ========================================
// AFFICHAGE DU CORRIGÉ
// ========================================

function showFeedback(q, ok) {
  const f = $('feedback');

  f.className = 'feedback ' +
    (
      q.verified === true
        ? (ok ? 'good' : 'bad')
        : ''
    );

  f.replaceChildren();

  const lead = document.createElement('strong');

  lead.textContent =
    q.verified !== true
      ? 'Corrigé en attente de validation'
      : ok
        ? '✓ Bonne réponse !'
        : '✕ Réponse incorrecte';

  f.append(lead);

  const detail = document.createElement('p');
  detail.style.margin = '8px 0';
  detail.style.whiteSpace = 'pre-line';

  detail.textContent =
    q.verified !== true
      ? 'Cette réponse n’est pas comptabilisée dans le score.'
      : ok
        ? 'Tu as identifié la bonne réponse. Voici pourquoi :'
        : 'Bonne réponse attendue : ' +
          getExpectedAnswer(q) + '.';

  f.append(detail);

  const reason = document.createElement('p');
  reason.style.margin = '8px 0 0';
  reason.style.whiteSpace = 'pre-line';
  reason.textContent = q.explanation || '';

  f.append(reason);
}

// ========================================
// VALIDATION ET CORRECTION
// ========================================

function validate() {
  if (locked || answers[idx] !== null) return;

  const q = seq[idx];

  let ok = false;
  let response;

  if (q.type === 'tf') {
    const vals = q.options.map((_, i) =>
      document.querySelector(
        `input[name="tf${i}"]:checked`
      )?.value
    );

    if (vals.some(v => v === undefined)) {
      alert('Réponds à toutes les affirmations.');
      return;
    }

    response = vals.map(v => v === 'true');

    ok = response.every(
      (v, i) => v === q.answer[i]
    );

  } else if (q.type === 'multiple') {
    response = Array.from(
      document.querySelectorAll(
        'input[name="multiple"]:checked'
      )
    ).map(input => Number(input.value));

    if (!response.length) {
      alert('Sélectionne au moins une réponse.');
      return;
    }

    ok =
      response.length === q.answer.length &&
      response.every(i => q.answer.includes(i));

  } else if (q.type === 'matching_text') {
    response = q.options.map((_, i) => $(`match-${i}`).value.trim().toUpperCase());
    if (response.some(v => !/^[A-E]$/.test(v))) {
      alert('Saisis une lettre de A à E pour chaque pictogramme.');
      return;
    }
    ok = response.every((v, i) => v === q.answer[i]);

  } else if (q.type === 'dropdown') {
    response = q.dropdowns.map((_, i) => $(`dropdown-${i}`).value);
    if (response.some(v => !v)) {
      alert('Complète les trois menus déroulants.');
      return;
    }
    ok = response.every((v, i) => v === q.answer[i]);

  } else if (q.type === 'text') {
    response = $('text-answer').value.trim();

    if (!response) {
      alert('Saisis une réponse.');
      return;
    }

    const accepted = Array.isArray(q.answer)
      ? q.answer
      : [q.answer];

    ok = accepted.some(
      answer =>
        normalizeDax(response) ===
        normalizeDax(answer)
    );

  } else {
    const choice = document.querySelector(
      'input[name="choice"]:checked'
    );

    if (!choice) {
      alert('Choisis une réponse.');
      return;
    }

    response = Number(choice.value);
    ok = response === q.answer;
  }

  // Mémoriser une seule fois la validation
  answers[idx] = {
    response,
    correct: ok
  };

  locked = true;

  if (q.verified === true) {
    if (ok) {
      good++;
    } else {
      errors.push(q);
    }
  }

  // Réafficher avec la réponse verrouillée
  render();
}

// ========================================
// QUESTION SUIVANTE ET RÉSULTATS
// ========================================

function next() {
  if (idx === seq.length - 1) {
    showResults();
  } else {
    goToQuestion(idx + 1);
  }
}

function showResults() {
  const completed = answers.filter(
    a => a !== null
  ).length;

  const n = seq.filter(
    q => q.verified === true
  ).length;

  view('result');

  $('resultTitle').textContent =
    `Résultat : ${good}/${n} questions corrigées`;

  $('resultText').textContent =
    `${completed}/${seq.length} question(s) traitée(s). ` +
    `${errors.length} erreur(s) à réviser.`;
}


 // ========================================
 // ZOOM SUR LES IMAGES
 // ========================================

function zoom() {
    const dialog = $('zoom');

    if (!$('fullimage').getAttribute('src')) return;

    if (!dialog.open) {
        dialog.showModal();
    }
}

document.addEventListener('keydown', e => {
    const dialog = $('zoom');

    if (e.key === 'Escape' && dialog.open) {
        dialog.close();
    }
});

// ========================================
// AFFICHER / MASQUER LA NAVIGATION
// ========================================

function toggleNavigation() {
    const sidebar = document.querySelector('.quiz-sidebar');
    const button = document.getElementById('toggle-nav');

    const hidden = sidebar.classList.toggle('collapsed');

    button.textContent = hidden
        ? '❮ Afficher'
        : 'Masquer ❯';

    button.setAttribute('aria-expanded', String(!hidden));
}


