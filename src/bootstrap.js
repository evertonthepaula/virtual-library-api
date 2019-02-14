const requireDir = require('require-dir');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();

requireDir('./models/');
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.use(morgan('dev'));
app.use('/api/', require('./routes'));
app.listen(3001, () => console.log('API iniciada em http://localhost:3001/api'));