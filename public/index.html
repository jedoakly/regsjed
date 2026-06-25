const express = require('express');
const path = require('path');
const fs = require('fs');
const questions = require('./questions');

const app = express();
app.use(express.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/questions', (req, res) => {
  const safe = questions.map(q => {
    const { answer, workings, ...rest } = q;
    return rest;
  });
  res.json(safe);
});

app.post('/api/check', (req, res) => {
  const { questionId, answer } = req.body;
  const q = questions.find(q => q.id === questionId);
  if (!q) return res.status(404).json({ error: 'Question not found' });

  let correct = false;
  if (q.type === 'mcq') {
    correct = parseInt(answer) === q.answer;
  } else if (q.type === 'multi') {
    const submitted = (Array.isArray(answer) ? answer : [answer]).map(Number).sort();
    const expected = [...q.answer].sort();
    correct = JSON.stringify(submitted) === JSON.stringify(expected);
  } else {
    const norm = s => String(s).toLowerCase().replace(/\s+/g, ' ').trim();
    correct = norm(answer) === norm(q.answer);
  }

  res.json({ correct, correctAnswer: q.answer, workings: q.workings || null, hint: q.hint || null });
});

app.get('*', (req, res) => {
  const htmlPath = path.join(__dirname, '../public/index.html');
  res.setHeader('Content-Type', 'text/html');
  res.send(fs.readFileSync(htmlPath, 'utf8'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

module.exports = app;
