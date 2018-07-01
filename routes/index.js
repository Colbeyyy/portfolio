var router = require('express').Router();
const request = require('superagent');

router.get('/', (req, res) =>
{
    res.render('home');
});

module.exports = router;