
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
let examMode = false;
let examDeadline = 0;
let examTimer = null;
const EXAM_DURATION = 60 * 60 * 1000;
const EXAM_STORAGE_KEY = 'powerbi-exam-v1';
function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const n = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[n]] = [questions[n], questions[i]];
  }
  return questions;
}
function getExamPool() {
  return Object.entries(series).flatMap(([seriesId, questions]) =>
    questions.filter(q => q.verified === true).map(q => ({...q, examKey: `${seriesId}:${q.num}`})));
}
function startExam() {
  const pool = getExamPool();
  if (pool.length < 35) { alert(`35 questions nécessaires. Seulement ${pool.length} disponibles.`); return; }
  if (examMode && !confirm('Abandonner la simulation en cours ?')) return;
  stopExamTimer();
  examMode = true;
  seq = shuffleQuestions(pool).slice(0, 35);
  answers = Array(seq.length).fill(null);
  idx = 0; good = 0; errors = []; locked = false;
  examDeadline = Date.now() + EXAM_DURATION;
  persistExam();
  updateExamUI();
  render(); view('quiz');
  examTimer = setInterval(tickExam, 250);
}
function persistExam() {
  if (!examMode) return;
  try { localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify({
    keys: seq.map(q => q.examKey), answers, idx, examDeadline
  })); } catch (e) { console.warn('Sauvegarde impossible', e); }
}
function stopExamTimer() { if (examTimer !== null) clearInterval(examTimer); examTimer = null; }
function tickExam() {
  if (!examMode) return;
  const left = Math.max(0, examDeadline - Date.now());
  const seconds = Math.ceil(left / 1000);
  $('exam-time').textContent = `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`;
  $('exam-timebar').style.width = `${left / EXAM_DURATION * 100}%`;
  $('exam-timebar').classList.toggle('urgent', left <= 10 * 60 * 1000);
  if (left <= 0) finishExam(true);
}
function updateExamUI() {
  $('exam-clock').classList.toggle('hidden', !examMode);
  $('exam-submit').classList.toggle('hidden', !examMode);
  $('check').classList.toggle('hidden', examMode);

  if (examMode) tickExam();
}
function readResponse(q, requireComplete = true) {
  let response;
  if (q.type === 'tf') {
    const vals = q.options.map((_,i) => document.querySelector(`input[name="tf${i}"]:checked`)?.value);
    if (requireComplete && vals.some(v => v === undefined)) return {valid:false};
    response = vals.map(v => v === undefined ? null : v === 'true');
  } else if (q.type === 'multiple') {
    response = Array.from(document.querySelectorAll('input[name="multiple"]:checked')).map(e=>Number(e.value));
    if (requireComplete && !response.length) return {valid:false};
  } else if (q.type === 'matching_text') {
    response = q.options.map((_,i) => $(`match-${i}`).value.trim().toUpperCase());
    if (requireComplete && response.some(v=> !/^[A-E]$/.test(v))) return {valid:false};
  } else if (q.type === 'dropdown') {
    response = q.dropdowns.map((_,i) => $(`dropdown-${i}`).value);
    if (requireComplete && response.some(v=>!v)) return {valid:false};
  } else if (q.type === 'text') {
    response = $('text-answer').value.trim();
    if (requireComplete && !response) return {valid:false};
  } else {
    const selected = document.querySelector('input[name="choice"]:checked');
    response = selected ? Number(selected.value) : null;
    if (requireComplete && response === null) return {valid:false};
  }
  return {valid:true,response};
}
function isResponseComplete(q, response) {
  if (response === null || response === undefined) return false;
  if (q.type === 'tf') return response.every(v => v !== null);
  if (q.type === 'multiple') return response.length > 0;
  if (q.type === 'matching_text') return response.every(v => /^[A-E]$/.test(v));
  if (q.type === 'dropdown') return response.every(Boolean);
  if (q.type === 'text') return Boolean(response.trim());
  return response !== null;
}
function checkResponse(q, response) {
  if (!isResponseComplete(q,response)) return false;
  if (q.type === 'tf' || q.type === 'matching_text' || q.type === 'dropdown')
    return response.every((v,i) => v === q.answer[i]);
  if (q.type === 'multiple') return response.length === q.answer.length && response.every(v=>q.answer.includes(v));
  if (q.type === 'text') return (Array.isArray(q.answer)?q.answer:[q.answer]).some(a=>normalizeDax(response)===normalizeDax(a));
  return response === q.answer;
}
function saveCurrentExamAnswer() {
  if (!examMode || !seq.length) return;
  const q = seq[idx];
  const response = readResponse(q, false).response;
  answers[idx] = isResponseComplete(q,response) ? {response,correct:null} :
    (response === null || response === undefined ? null : {response,correct:null});
  persistExam();
}
function formatExamResponse(q, response) {
  if (q.type === 'tf') return response.map((v,i)=>`${i+1} : ${v===true?'Vrai':v===false?'Faux':'Non répondu'}`).join(' · ');
  if (q.type === 'multiple') return response.map(i=>optionText(q.options[i])).join(' ; ') || 'Aucune réponse';
  if (q.type === 'matching_text') return q.options.map((role,i)=>`${role} : ${response[i]||'—'}`).join(' · ');
  if (q.type === 'dropdown') return response.join(' / ');
  if (q.type === 'text') return response || 'Aucune réponse';
  return response === null ? 'Aucune réponse' : optionText(q.options[response]);
}
function finishExam(expired = false) {
  if (!examMode) return;
  if (!expired) {
    saveCurrentExamAnswer();
    const unanswered = answers.filter((a,i) => !a || !isResponseComplete(seq[i],a.response)).length;
    if (!confirm(unanswered ? `Il reste ${unanswered} question(s) sans réponse complète. Terminer ?` : 'Terminer et afficher les résultats ?')) return;
  } else saveCurrentExamAnswer();
  stopExamTimer();
  try { localStorage.removeItem(EXAM_STORAGE_KEY); } catch(e) {}
  const total = seq.length;
  const attempted = answers.filter((a,i)=>a && isResponseComplete(seq[i],a.response)).length;
  const verified = total;
  const correct = answers.reduce((sum,a,i)=>sum+(a && checkResponse(seq[i],a.response)?1:0),0);
  errors = seq.filter((q,i)=>!answers[i] || !checkResponse(q,answers[i].response));
  examMode = false;
  updateExamUI();
  view('result');
  $('resultTitle').textContent = expired ? 'Temps écoulé !' : 'Simulation terminée';
  $('resultText').textContent = `Score : ${correct}/${total} (${Math.round(correct/total*100)} %). ${attempted}/${total} questions répondues.`;
  $('result-restart').textContent = 'Nouvelle simulation';
  $('result-restart').onclick = startExam;
  $('result-errors').classList.toggle('hidden',errors.length===0);
  const review = $('exam-review');
  review.classList.remove('hidden');
  review.replaceChildren();
  const overview = document.createElement('div');
  overview.className = 'review-overview';
  const wrong = total - correct;
  overview.innerHTML = `<div class="review-stat"><span>Bonnes réponses</span><strong>${correct}</strong></div><div class="review-stat review-stat-wrong"><span>Erreurs / omissions</span><strong>${wrong}</strong></div><div class="review-stat"><span>Réussite</span><strong>${Math.round(correct/total*100)} %</strong></div>`;
  review.append(overview);
  const toolbar = document.createElement('div');
  toolbar.className = 'review-toolbar';
  const heading = document.createElement('h2'); heading.textContent = 'Correction détaillée';
  const filters = document.createElement('div'); filters.className = 'review-filters';
  toolbar.append(heading, filters); review.append(toolbar);
  const list = document.createElement('div'); list.className = 'review-list'; review.append(list);
  const rows = [];
  seq.forEach((q,i) => {
    const a = answers[i];
    const complete = !!a && isResponseComplete(q,a.response);
    const ok = complete && checkResponse(q,a.response);
    const item = document.createElement('details');
    item.className = `review-card ${ok ? 'review-correct' : 'review-incorrect'}`;
    const summary = document.createElement('summary');
    const status = document.createElement('span');
    status.className = 'review-status';
    status.textContent = ok ? '✓ Correcte' : complete ? '✕ Incorrecte' : '✕ Sans réponse';
    const label = document.createElement('span'); label.className = 'review-question';
    label.textContent = `Question ${i+1} · Série ${q.examKey.split(':')[0]} · ${q.title}`;
    const chevron = document.createElement('span'); chevron.className = 'review-chevron'; chevron.textContent = '⌄';
    summary.append(status,label,chevron); item.append(summary);
    const body = document.createElement('div'); body.className = 'review-body';
    const userAnswer = document.createElement('p');
    const responseText = complete ? formatExamResponse(q,a.response) : 'Aucune réponse complète';
    const yourLabel = document.createElement('strong'); yourLabel.textContent = 'Ta réponse : ';
    userAnswer.append(yourLabel, document.createTextNode(responseText));
    const expected = document.createElement('p');
    const expectedLabel = document.createElement('strong'); expectedLabel.textContent = 'Réponse attendue : ';
    expected.append(expectedLabel,document.createTextNode(getExpectedAnswer(q)));
    body.append(userAnswer,expected);
    if (q.explanation) { const why=document.createElement('p'); const title=document.createElement('strong');title.textContent='Explication : ';why.append(title,document.createTextNode(q.explanation));body.append(why); }
    item.append(body); list.append(item); rows.push({item,ok});
  });
  [['Toutes', 'all'], ['Incorrectes', 'wrong'], ['Correctes', 'right']].forEach(([label,filter])=>{
    const button=document.createElement('button'); button.type='button';button.textContent=label;
    button.className=filter==='all'?'review-filter active':'review-filter';
    button.onclick=()=>{
      filters.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      button.classList.add('active');
      rows.forEach(({item,ok})=>item.classList.toggle('hidden',filter==='wrong'?ok:filter==='right'?!ok:false));
    };
    filters.append(button);
  });
}
function quitQuiz() {
  if (examMode) {
    if (!confirm('Quitter la simulation ? La session en cours sera abandonnée.')) return;
    stopExamTimer(); examMode=false;
    try {localStorage.removeItem(EXAM_STORAGE_KEY);}catch(e){}
    updateExamUI();
  }
  view('intro');
}
function restoreExam() {
  let saved; try {saved=JSON.parse(localStorage.getItem(EXAM_STORAGE_KEY));}catch(e){return;}
  if(!saved || !Array.isArray(saved.keys) || saved.keys.length!==35) return;
  const pool=new Map(getExamPool().map(q=>[q.examKey,q]));
  if(!saved.keys.every(k=>pool.has(k))) return;
  if(!confirm('Reprendre la simulation interrompue ? Le temps a continué à défiler.')) {
    try {localStorage.removeItem(EXAM_STORAGE_KEY);}catch(e){} return;
  }
  examMode=true; seq=saved.keys.map(k=>pool.get(k)); answers=saved.answers;
  idx=Math.min(Math.max(0,saved.idx||0),34); examDeadline=saved.examDeadline;
  render(); view('quiz'); updateExamUI();
  if(examMode) examTimer=setInterval(tickExam,250);
}
window.addEventListener('DOMContentLoaded',restoreExam);


const $ = id => document.getElementById(id);

// ========================================
// AFFICHAGE DES PAGES
// ========================================

function view(id) {
  if (examMode && id === 'intro') { quitQuiz(); return; }
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
  return String(value ?? '').replace(/\s+/g, '');
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
  if (examMode) { alert('Termine ou quitte la simulation avant de changer de mode.'); return; }
  stopExamTimer();
  $('exam-review').classList.add('hidden');
  $('result-restart').textContent='Recommencer';
  $('result-restart').onclick=()=>start('all');
  $('result-errors').classList.remove('hidden');
  let questions = [];

  if (mode === 'errors') {
    questions = errors.filter(q => q.verified === true);

  } else if (mode === 'random') {
    questions = Object.values(series).flat().filter(q => q.verified === true);

    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [
        questions[j],
        questions[i]
      ];
    }

  } else {
    questions = series[serieActive].filter(q => q.verified === true);
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

    if (examMode) {
      button.classList.add(state && isResponseComplete(q,state.response) ? 'exam-answered' : 'unanswered');
    } else if (state) {
      button.classList.add(state.correct ? 'correct' : 'incorrect');
    } else {
      button.classList.add('unanswered');
    }

    if (i === idx) {
      button.classList.add('active');
      button.setAttribute('aria-current', 'step');
    }

    let icon = '○';

    if (examMode) {
      icon = state && isResponseComplete(q,state.response) ? '●' : '○';
    } else if (state && q.verified === true) {
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

  if (examMode) saveCurrentExamAnswer();
  idx = index;
  if (examMode) persistExam();
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

  locked = !examMode && state !== null;

  $('counter').textContent =
    `Question ${idx + 1}/${seq.length}`;

  $('score').textContent = examMode ? `${answers.filter((a,i)=>a && isResponseComplete(seq[i],a.response)).length} / ${seq.length} réponses` : `${good} correcte(s)`;

  // Progression basée sur les questions validées
  const completed = examMode ? answers.filter((a,i)=>a && isResponseComplete(seq[i],a.response)).length : answers.filter(a => a !== null).length;

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

  $('check').classList.toggle('hidden', locked || examMode);
  $('next').classList.toggle('hidden', !examMode && !locked);



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
      const input = makeTextInput(`match-${i}`, state?.response?.[i] ?? '', !examMode && !!state);
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
        select.disabled = !examMode && !!state;
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
      const input = makeTextInput('text-answer', state?.response ?? '', !examMode && !!state);
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
      const input = makeTextInput('text-answer', state?.response ?? '', !examMode && !!state);
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
            input.disabled = !examMode;
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

          input.disabled = !examMode;
        }

        label.append(
          input,
          createOptionContent(option)
        );

        $('opts').append(label);
      }
    });
  }

  if (state && !examMode) {
    showFeedback(q, state.correct);
  }

  if (examMode) { $('next').classList.remove('hidden'); $('next').disabled = idx === seq.length - 1; }
  $('next').textContent =
    idx === seq.length - 1
      ? 'Voir mon résultat'
      : 'Question suivante →';

  renderNavigation();
  updateExamUI();
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
  if (examMode) return;
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
  if (examMode) { goToQuestion(Math.min(idx+1,seq.length-1)); return; }
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



// En simulation, mémoriser les saisies sans afficher les corrections.
document.addEventListener('input', e => {if(examMode && $('quiz').contains(e.target)) {saveCurrentExamAnswer();renderNavigation();}});
document.addEventListener('change', e => {if(examMode && $('quiz').contains(e.target)) {saveCurrentExamAnswer();renderNavigation();}});
