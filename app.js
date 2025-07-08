const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // <-- ajoute ça
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const specialUserRoutes = require('./routes/specialUserRoutes');
const quizRoutes = require('./routes/quizRoutes');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());  // <-- active CORS ici

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/special-users', specialUserRoutes);
app.use('/api/quizzes', quizRoutes);

// Database connection
connectDB();

module.exports = app;
