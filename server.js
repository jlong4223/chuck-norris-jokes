const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
const indexRouter = require('./routes/index');


const app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(morgan('dev'));

// We need this middleware to accept incoming JSON data
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/', indexRouter);


app.listen(3000, function() {
  console.log(`Express is listening to port 3000`);
});
