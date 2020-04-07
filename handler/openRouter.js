const express = require('express');
const passport = require('passport');
const helper = require('./helpers.js');
const path = require('path');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Welcome Page
router.get('/', helper.ensureAuthenticated, (req, resp) => {
   
   const token = jwt.sign(req.user.email, req.user.apikey, { expiresIn: '1h'});
   resp.cookie('token', token);
   resp.redirect('https://web3asg2.netlify.com/home');
});

router.get('/login', (req, resp) => {
   const token = req.cookies.token;
   if(!token){
      resp.render('login', {message: req.flash('error')});
   } else {
      passport.authenticate('localLogin')
   }
   
});

router.get('/logout', (req, resp) => {
   req.logout();
   req.flash('info', 'Your were logged out');
   resp.render('login', {message: req.flash('info')});
});

router.post('/login', async (req, resp, next) => {
   //use passport authentication to see if valid login
   passport.authenticate('localLogin', { successRedirect: '/',
                                          failureRedirect: '/login',
                                          failureFlash: true})(req,resp, next);
})

module.exports = router;