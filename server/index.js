'use strict';

var express = require('express');
var app = express();
var users = ['a', 'b', 'c'];
//dddasdfds
app.get('/api/users', function (req, res) {
  res.json(users);
});


app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send('<h1>some html</h1>');
});

module.exports = app;
