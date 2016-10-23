'use strict';

// CONSTANTS
const PORT = process.env.PORT || 8000;

// PACKAGE REQUIRES
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

var massive = require('massive');
// var connectionString = "postgres://heatherhargreaves@localhost/ladyproblemsdb";


// APP DECLARATION
const app =  module.exports = express();

// DB CONNECT
// const massiveInstance = massive.connectSync({connectionString : connectionString});
// app.set('db', massiveInstance);
// const db = app.get('db');

// WEBPACK CONFIG
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

//CONTROLLERS
var company_controller = require('./controllers/company_controller');
var score_controller = require('./controllers/score_controller');


// ROUTES
app.use('/api', require('./routes/api'));

///////////////////////////
/// POST ENDPOINTS ///////
//////////////////////////

//create a company
//need {company: 'name'}
app.post('/create-company', company_controller.create_company);
//create a score
//need {advancement: int, support: int, safety: int}
app.post('/create-score', score_controller.create_score);


///////////////////////////
/// GET ENDPOINTS ///////
//////////////////////////

//get company by name
//returns {id: int, name: string}
app.get('/company/:name', company_controller.get_company_by_name);
//get average advancement score by company id
//returns { avg: int}
app.get('/company/adv-score/:id', score_controller.get_advancement_score);
//get average advancement score by company id
//returns { avg: int}
app.get('/company/sup-score/:id', score_controller.get_support_score);
//get average advancement score by company id
//returns { avg: int}
app.get('/company/safe-score/:id', score_controller.get_safety_score);


app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, './public/index.html');
  res.sendFile(indexPath);
});

// SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});
