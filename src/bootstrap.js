require('dotenv').config();
const compression = require('compression');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

const logger = require("./routes/config/winston");

requireDir('./models/');
mongoose.connect(`${process.env.DB_DBMS}://${process.env.DB_HOST}:${process.env.DB_PORT}/nodeapi`, { useNewUrlParser: true });

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use('/api/', require('./routes'));  
app.use(express.urlencoded({extended: true}));

app.listen(3002, () => logger.info(`API started in: ${process.env.NODE_ENV} ,  http://localhost:3002/api`));