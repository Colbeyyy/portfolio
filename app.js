const express = require('express')
    , handlebars = require('express-handlebars')
    , app = express()
    , bodyParser = require('body-parser')
    , path = require('path');

const config = require('./config.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.use(require('./routes'));


app.listen(8080);