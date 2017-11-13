var router = require('express').Router();
const fetch = require('node-fetch');
const btoa = require('btoa');

/**
 * 
 */
module.exports = (passport) => {

  router.get('/auth', passport.authenticate('discord', { scope: ['identify','guilds']}));
  
  router.get('/auth/callback', passport.authenticate('discord', { failureRedirect: '/'}), (req, res) =>
  {
    res.redirect('/');
  });

  return router;
};