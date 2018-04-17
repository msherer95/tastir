const express = require('express');
const compression = require('compression');
const app = express();
const passport = require('passport');
//require('./passport')(passport);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bcrypt = require('bcrypt-nodejs');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const routes = require('./routes'); // all routes
const authenticated = require('./config/authenticated.js'); // functions to confirm authentication for routes

app.use(compression()); // enable gzip compression

// listen to environmental port, or 9090 for localhost testing
const port = process.env.PORT || 9090;
app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});

// EXPRESS MIDDLEWARE
app.use(morgan('dev')); // logger middleware for requests
app.use(bodyParser()); // body parsing middleware
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride()); // allow usage of all HTTP verbs, even when not supported by client
app.use(session({ secret: 'randompassword' ,cookie: { maxAge: 360000000 }})); // setup sessions
app.use(passport.initialize()); // use passport for authentication
app.use(passport.session()); // enable sessions for passport
app.use('/private', authenticated.isLoggedIn); // check if logged in before redirecting to /private

// inject routes
app.use('/', routes);

// STATIC DIRECTORIES

// use dist/public as static directory for public html/css files
app.use(express.static(__dirname + '/dist'));

//use dist/private as static directory for private html/css files
app.use(express.static(__dirname + '/dist/private'));
