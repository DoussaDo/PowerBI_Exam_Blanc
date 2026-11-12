
// Fonctionnement du quiz

// ========================================
// GESTION DES SÉRIES
// ========================================

const series = {
  1: serie01,
  2: serie02,
  3: serie03
};

let serieActive = 1;

function choisirSerie(numero) {
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
// DÉMARRAGE DU QUIZ
// ========================================

function start(mode) {

  if (mode === 'errors') {

    // Réviser les erreurs du dernier quiz
    seq = errors.slice();

  } else if (mode === 'random') {

    // Regrouper toutes les séries
    seq = Object.values(series).flat();

    // Mélanger les questions (Fisher-Yates)
    for (let i = seq.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [seq[i], seq[j]] = [seq[j], seq[i]];
    }

  } else {

    // Lancer uniquement la série sélectionnée
    seq = series[serieActive].slice();

  }

  if (!seq.length) {
    alert(
      mode === 'errors'
        ? 'Aucune erreur enregistrée.'
        : 'Aucune question disponible.'
    );
    return;
  }

  idx = 0;
  good = 0;
  errors = [];

  render();
  view('quiz');
}

// ========================================
// AFFICHAGE D'UNE QUESTION
// ========================================

function render() {

  locked = false;

  const q = seq[idx];

  $('counter').textContent =
    `Question ${idx + 1}/${seq.length} · n°${q.num}`;

  $('score').textContent = `${good} correcte(s)`;

  $('bar').style.width = `${idx / seq.length * 100}%`;

  $('title').textContent = q.title;

  $('image').src = q.image;
  $('fullimage').src = q.full;

  $('feedback').className = 'feedback hidden';

  $('check').classList.remove('hidden');
  $('next').classList.add('hidden');

  $('pending').classList.toggle('hidden', q.verified);

  $('opts').replaceChildren();

  q.options.forEach((o, i) => {

    if (q.type === 'tf') {

      // Question Vrai / Faux

      let row = document.createElement('div');
      row.className = 'tf';

      let t = document.createElement('span');
      t.textContent = o;

      row.append(t);

      for (const val of ['true', 'false']) {

        let l = document.createElement('label');
        let inp = document.createElement('input');

        inp.type = 'radio';
        inp.name = 'tf' + i;
        inp.value = val;

        l.append(
          inp,
          document.createTextNode(
            val === 'true' ? 'Vrai' : 'Faux'
          )
        );

        row.append(l);
      }

      $('opts').append(row);

    } else {

      // Question à choix unique

      let l = document.createElement('label');
      let inp = document.createElement('input');
      let span = document.createElement('span');

      l.className = 'opt';

      inp.type = 'radio';
      inp.name = 'choice';
      inp.value = i;

      span.textContent = o;

      l.append(inp, span);

      $('opts').append(l);
    }

  });
}

// ========================================
// VALIDATION ET CORRECTION
// ========================================

function validate() {

  if (locked) return;

  const q = seq[idx];

  let ok = false;

  if (q.type === 'tf') {

    // Vérifier toutes les affirmations Vrai / Faux

    let vals = q.options.map((_, i) =>
      document.querySelector(
        `input[name="tf${i}"]:checked`
      )?.value
    );

    if (vals.some(v => v === undefined)) {
      alert('Réponds à toutes les affirmations.');
      return;
    }

    ok = q.verified && vals.every(
      (v, i) => (v === 'true') === q.answer[i]
    );

  } else {

    // Vérifier une question à choix unique

    const c = document.querySelector(
      'input[name="choice"]:checked'
    );

    if (!c) {
      alert('Choisis une réponse.');
      return;
    }

    ok = q.verified &&
      Number(c.value) === q.answer;
  }

  locked = true;

  // Mise à jour du score et des erreurs
  if (q.verified) {
    if (ok) {
      good++;
    } else {
      errors.push(q);
    }
  }

  // Affichage du corrigé
  let f = $('feedback');

  f.className = 'feedback ' +
    (q.verified ? (ok ? 'good' : 'bad') : '');

  let expected = q.type === 'tf'
    ? q.answer?.map(
        (v, i) => `${i + 1}: ${v ? 'Vrai' : 'Faux'}`
      ).join(' · ')
    : q.options[q.answer];

  f.replaceChildren();

  const lead = document.createElement('strong');

  lead.textContent = !q.verified
    ? 'Corrigé en attente de validation'
    : ok
      ? '✓ Bonne réponse !'
      : '✕ Réponse incorrecte';

  f.append(lead);

  const detail = document.createElement('p');
  detail.style.margin = '8px 0';

  detail.textContent = !q.verified
    ? 'Cette réponse n’est pas comptabilisée dans le score.'
    : ok
      ? 'Tu as identifié la bonne réponse. Voici pourquoi :'
      : 'Bonne réponse attendue : ' + expected + '.';

  f.append(detail);

  const reason = document.createElement('p');
  reason.style.margin = '8px 0 0';

  reason.textContent = q.explanation;

  f.append(reason);

  // Bloquer les réponses après validation
  document.querySelectorAll('#opts input').forEach(
    x => x.disabled = true
  );

  $('check').classList.add('hidden');
  $('next').classList.remove('hidden');

  $('next').textContent =
    idx === seq.length - 1
      ? 'Voir mon résultat'
      : 'Question suivante →';
}

// ========================================
// QUESTION SUIVANTE ET RÉSULTATS
// ========================================

function next() {

  idx++;

  if (idx === seq.length) {

    view('result');

    let n = seq.filter(q => q.verified).length;

    $('resultTitle').textContent =
      `Résultat : ${good}/${n} questions corrigées`;

    $('resultText').textContent =
      `${seq.length - n} question(s) en attente de validation du corrigé. ` +
      `${errors.length} erreur(s) à réviser.`;

  } else {

    render();

  }
}

// ========================================
// ZOOM SUR LES IMAGES
// ========================================

function zoom() {
  $('zoom').showModal();
}

document.addEventListener('keydown', e => {

  if (e.key === 'Escape' && $('zoom').open) {
    $('zoom').close();
  }

});
