var router = require('express').Router();
const fetch = require('node-fetch');
const btoa = require('btoa');

const config = require('../config/config.json')
const redirect = encodeURI("http://localhost:8080/login/callback");

router.get('/login', (req, res) =>
{
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${config.client_id}&scope=identify+guilds&response_type=code&redirect_uri=${redirect}`)
});

router.get('/login/callback', async (req, res) =>
{
    if (!req.query.code) throw new Error('NoCodeProvided');
    const code = req.query.code;
    const creds = btoa(`${config.client_id}:${config.client_secret}`);
    const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${creds}`,
        },
      });
    const json = await response.json();
    res.redirect(`/?token=${json.access_token}`);
});

module.exports = router;