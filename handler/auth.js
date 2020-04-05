const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const LoginModel = require('../models/Login.js');

//maps the passport user+passwd fields to the names of fields in database
const localOpt = {
    usernameField : 'email',
    passwordField : 'password'
};

//define strategy for validating login
const strategy = new LocalStrategy(localOpt, async(email, password, done) => {
    
  //find the user in the DB associated with the email provided by the user
  await LoginModel.findOne({ email: email }, function(err, user) {
      
    if (err) { return done(err); }

    //if the user isnt found in the database, set flash message
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (!user.isValidPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user, {message: 'Logged in Successfully.'});
  });
});

//for localLogin, user our strategy to handle User login
passport.use('localLogin', strategy);

/*
By default, passport uses sessions to maintain login status
you have to determine what to save in session via serializeUser
and deserializeUSer. In our case, we will save the email in the session data
*/
passport.serializeUser( (user, done) => done(null, user.email));

passport.deserializeUser((email, done) => {
    LoginModel.findOne( { email: email}, (err, user) => done(err, user));
});