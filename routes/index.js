var router = require('express').Router();
const request = require('superagent');

router.get('/', (req, res) =>
{
    console.log(req.user);
    if (req.isAuthenticated()) {
        
        let guilds = [];
        for (const guild of req.user.guilds)
        {
            if ((guild.permissions & 0x00000008) == 8) {
                guilds.push(guild);
            }
        }

        res.render('panel',{
            user: req.user,
            loggedIn: req.isAuthenticated(),
            guilds: guilds
        });
    }
    else {
        res.render('home',{
            user: req.user,
            loggedIn: req.isAuthenticated()
        });
    }
});

router.get('/logout', (req, res) =>
{
    req.logout();
    res.redirect('/');
});

router.get('/profile', (req, res) =>
{
    res.render('panel',{
        user: req.user,
        loggedIn: req.isAuthenticated()
    });
});

router.get('/servers', (req, res) =>
{
    res.render('panel',{
        user: req.user,
        loggedIn: req.isAuthenticated()
    });
});

router.get('/settings', (req, res) =>
{
    res.render('panel',{
        user: req.user,
        loggedIn: req.isAuthenticated()
    });
});

router.get('/search', (req, res) =>
{
    res.render('panel',{
        user: req.user,
        loggedIn: req.isAuthenticated()
    });
});

module.exports = router;