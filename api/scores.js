const db = require('./db');

function recordAttempt(req, res) {
  const { questionId, correct, standard } = req.body;
  if (questionId == null || correct == null || !standard)
    return res.status(400).json({ error: 'Missing fields' });

  const id = db.get('nextAttemptId').value();
  db.set('nextAttemptId', id + 1).write();
  db.get('attempts').push({
    id,
    user_id: req.user.id,
    question_id: questionId,
    correct: correct ? 1 : 0,
    standard,
    attempted_at: new Date().toISOString()
  }).write();

  res.json({ ok: true });
}

function getStats(req, res) {
  const attempts = db.get('attempts').filter({ user_id: req.user.id }).value();

  const byStandard = {};
  attempts.forEach(a => {
    if (!byStandard[a.standard]) byStandard[a.standard] = { standard: a.standard, total: 0, correct: 0 };
    byStandard[a.standard].total++;
    byStandard[a.standard].correct += a.correct;
  });

  const recent = [...attempts].reverse().slice(0, 20);
  const overall = {
    total: attempts.length,
    correct: attempts.reduce((s, a) => s + a.correct, 0)
  };

  res.json({ byStandard: Object.values(byStandard), recent, overall });
}

module.exports = { recordAttempt, getStats };
