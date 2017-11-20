var router = require('express').Router();

router.get('/', (req, res) =>
{
    if (req.isAuthenticated()) {
        res.render('panel',{
            user: req.user,
            loggedIn: req.isAuthenticated()
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