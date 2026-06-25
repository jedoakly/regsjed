const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const { register, login, logout, requireAuth, me } = require('./auth');
const { recordAttempt, getStats } = require('./scores');
const questions = require('./questions');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Auth routes
app.post('/api/register', register);
app.post('/api/login', login);
app.post('/api/logout', requireAuth, logout);
app.get('/api/me', requireAuth, me);

// Questions
app.get('/api/questions', (req, res) => {
  // Strip answers before sending to client
  const safe = questions.map(q => {
    const { answer, workings, ...rest } = q;
    return rest;
  });
  res.json(safe);
});

app.get('/api/questions/:id', requireAuth, (req, res) => {
  const q = questions.find(q => q.id === parseInt(req.params.id));
  if (!q) return res.status(404).json({ error: 'Not found' });
  res.json(q);
});

// Score routes
app.post('/api/attempts', requireAuth, recordAttempt);
app.get('/api/stats', requireAuth, getStats);

// Answer checking
app.post('/api/check', requireAuth, (req, res) => {
  const { questionId, answer } = req.body;
  const q = questions.find(q => q.id === questionId);
  if (!q) return res.status(404).json({ error: 'Question not found' });

  let correct = false;
  let correctAnswer = q.answer;
  let workings = q.workings || null;
  let hint = q.hint || null;

  if (q.type === 'mcq') {
    correct = parseInt(answer) === q.answer;
  } else if (q.type === 'multi') {
    const submitted = (Array.isArray(answer) ? answer : [answer]).map(Number).sort();
    const expected = [...q.answer].sort();
    correct = JSON.stringify(submitted) === JSON.stringify(expected);
  } else {
    // fill/calc — lenient match, normalise whitespace and case
    const norm = s => String(s).toLowerCase().replace(/\s+/g, ' ').trim();
    correct = norm(answer) === norm(q.answer);
  }

  res.json({ correct, correctAnswer, workings, hint });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`EWRB Exam app running on http://localhost:${PORT}`));

module.exports = app;
