var router = require('express').Router();
const request = require('superagent');

router.get('/', (req, res) =>
{
    res.render('home');
});

router.get('/blog', (req, res) =>
{
    res.render('blog');
});

module.exports = router;