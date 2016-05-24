var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var config = require('lib/config');
var fs = require('fs');
// var dao = require('db/dao');

var app = express();

http.createServer(app).listen(config.get('server_port'), function () {
    console.log('server start on ' + config.get('server_port') + ' port');
});

app.set('views', path.join(__dirname, '../frontend/static'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../frontend/static')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    // console.log(res.body);
    fs.createReadStream('index.html').pipe(res);
});
