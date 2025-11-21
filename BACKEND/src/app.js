const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

// Allow only your Vercel frontend
const allowedOrigins = [
  'https://goodwork-nine.vercel.app'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // only if using cookies/auth
}));

app.use(express.json());

// Test route to confirm backend is live
app.get('/', (req, res) => {
  res.send('Backend is live on Render!');
});

// Your API routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

module.exports = app;
