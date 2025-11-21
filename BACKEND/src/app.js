const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

// More flexible CORS for development
const allowedOrigins = [
  'https://goodwork-nine.vercel.app',
  'http://localhost:3000', // Add local development
  'http://localhost:5173'  // Add Vite default port
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy violation'), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('Backend is live!'));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

module.exports = app;