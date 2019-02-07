const requireDir = require('require-dir');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models/');

app.use(express.json());
app.use('/api/', require('./src/routes'));
app.listen(3001);