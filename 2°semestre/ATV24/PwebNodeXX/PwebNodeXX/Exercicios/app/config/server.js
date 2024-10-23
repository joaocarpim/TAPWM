

var express = require('express');
var consign = require('consign');
 
var app = express();
 
app.set('view engine', 'ejs');
app.set('views', './app/views');
 
consign({cwd:'app'}) // para incluir a pasta app
  .include('routes')
   .then('config/dbConnection.js') 
  .into(app);
 
module.exports = app;