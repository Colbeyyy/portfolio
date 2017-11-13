var express = require('express');
var handlebars = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var DiscordAuth = require('passport-discord').Strategy;

const config = require('./config.json');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(new DiscordAuth({
    clientID: '378614988388040704',
    clientSecret: 'y4laqaVUZoW-Q8MZSoG2Js2ZJ_2pM8lv',
    callbackURL: 'http://localhost:3000/auth/callback',
    scope: [
        'identify',
        'guilds',
    ]
}, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
        return done(null, profile);
    });
}))

app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(require('./routes'));

app.use(require('./routes/auth')(passport));

app.use(require('./routes/api'));


app.listen(8080);