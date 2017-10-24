var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
var body_parser = require('body-parser');
var path = require('path');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(require('./routes'));

app.use(require('./routes/login'));

app.listen(8080);