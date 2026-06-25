const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

const JWT_SECRET = process.env.JWT_SECRET || 'ewrb-dev-secret-change-in-prod';

function register(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ error: 'All fields required' });
  if (password.length < 6)
    return res.status(400).json({ error: 'Password must be at least 6 characters' });

  const users = db.get('users');
  const emailLower = email.trim().toLowerCase();
  if (users.find({ email: emailLower }).value())
    return res.status(409).json({ error: 'Email already exists' });
  if (users.find({ username: username.trim() }).value())
    return res.status(409).json({ error: 'Username already taken' });

  const id = db.get('nextUserId').value();
  db.set('nextUserId', id + 1).write();
  const hash = bcrypt.hashSync(password, 10);
  users.push({ id, username: username.trim(), email: emailLower, password_hash: hash, created_at: new Date().toISOString() }).write();

  const token = jwt.sign({ id, username: username.trim() }, JWT_SECRET, { expiresIn: '30d' });
  res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000, sameSite: 'lax' });
  res.json({ ok: true, username: username.trim() });
}

function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const user = db.get('users').find({ email: email.trim().toLowerCase() }).value();
  if (!user || !bcrypt.compareSync(password, user.password_hash))
    return res.status(401).json({ error: 'Invalid email or password' });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '30d' });
  res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000, sameSite: 'lax' });
  res.json({ ok: true, username: user.username });
}

function logout(req, res) {
  res.clearCookie('token');
  res.json({ ok: true });
}

function requireAuth(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.clearCookie('token');
    res.status(401).json({ error: 'Session expired' });
  }
}

function me(req, res) {
  res.json({ username: req.user.username, id: req.user.id });
}

module.exports = { register, login, logout, requireAuth, me };
