const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/online_journal';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
  .then(()=> console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/authRoutes');
const entryRoutes = require('./routes/entryRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/entries', entryRoutes);

app.get('/', (req,res)=> res.send('Online Journal API is running'));

app.listen(PORT, ()=> console.log(`🚀 Server running on port ${PORT}`));
