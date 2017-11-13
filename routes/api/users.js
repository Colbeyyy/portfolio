var router = require('express').Router();

router.get('/api/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({a: 'hello world'}));
});

module.exports = router;