var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');

var app = express();

// Configure the database.
var mongooseConfig = require('./config/mongo.config');
mongoose.connect(mongooseConfig.connectionString);

// Set the public folder to serve public assets.
app.use(express.static(__dirname));

// Allow CORS requests to be made to the server.
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, \Authorization');

  next();
});

// Uncomment after placing your favicon in /public.
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat' }));

// Configure and initialize Passport.
require('./config/passport.config')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Require all the routes.
var auth = require('./routes/auth')(passport);
var twitter = require('./routes/twitter');
var managerism = require('./routes/managerism');

// Register all the routes.
app.use('/auth', auth);
app.use('/twitter', twitter);
app.use('/managerism', managerism);

// All other routes go to frontend.
app.get('*', function (req, res) {
  res.sendfile('./public/index.html');
});

// Production error handler (no stacktraces leaked to user)
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.message);
});

module.exports = app;
