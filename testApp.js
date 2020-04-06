const parser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('express-flash');

// use .env file for configuration constants
require('dotenv').config();

// create connection to database
require('./dataConnector.js').connect();

//create an express app
const app = express();

// view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs'); 

//tell node to use  json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

// Express session
app.use(cookieParser('oreos'));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//use express flash
app.use(flash());

//set up the passport authentication 
require('./handler/auth.js');

//set up route handlers
const openRoutes = require('./handler/openRouter.js');
app.use('/', openRoutes);

//movie handler
const movieRouter = require('./handler/movieRouter.js');
app.use('/api', movieRouter);

app.use('/static', express.static(path.join(__dirname, 'client/build')));

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
});

// Use express to listen to port
let port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server now running at port= " + port);
});