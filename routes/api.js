var router = require('express').Router();
const fs = require('fs');

const apiFiles = fs.readdirSync('./routes/api');

for (const file of apiFiles) {
    const api = require(`./api/${file}`);
    router.use(api);
}

router.get('/api', (req, res) => {
    res.redirect('/');
})

module.exports = router;