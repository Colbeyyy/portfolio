var router = require('express').Router();

router.get('/', (req, res) =>
{
    console.log(req.user);
    res.render('home',{
        user: req.user,
        loggedIn: req.isAuthenticated()
    });
});

module.exports = router;