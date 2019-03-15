const compression = require('compression');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();

const logger = require("./routes/config/winston");

requireDir('./models/');
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use('/api/', require('./routes'));  
app.use(express.urlencoded({extended: true}));

app.listen(3002, () => logger.info('API iniciada em http://localhost:3002/api'));