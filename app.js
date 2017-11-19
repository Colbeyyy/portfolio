const express = require('express')
    , handlebars = require('express-handlebars')
    , app = express()
    , bodyParser = require('body-parser')
    , path = require('path')
    , passport = require('passport')
    , session = require('express-session')
    , DiscordAuth = require('passport-discord').Strategy
    , refresh = require('passport-oauth2-refresh');

const config = require('./config.json');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

const discordStrat = new DiscordAuth({
    clientID: '378614988388040704',
    clientSecret: 'y4laqaVUZoW-Q8MZSoG2Js2ZJ_2pM8lv',
    callbackURL: 'http://localhost:8080/auth/callback',
    scope: [
        'identify',
        'guilds',
    ]
}, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
        profile.refreshToken = refreshToken;
        return done(null, profile);
    });
})

passport.use(discordStrat);

refresh.use(discordStrat);

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

app.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.use(require('./routes'));

app.use(require('./routes/auth')(passport));

app.use(require('./routes/api'));


app.listen(8080);