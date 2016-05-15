var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var config = require('lib/config');
var fs = require('fs');
var dao = require('db/dao');

var app = express();

app.set('views', path.join(__dirname, '../frontend/view'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../frontend/static')));
app.use(bodyParser.json());

app.use(function (req, res) {
    switch (req.url) {
    //TODO...
    }
});