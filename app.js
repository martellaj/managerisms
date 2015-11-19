var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

// Require all the routes.
var auth = require('./routes/auth')(passport);
var twitter = require('./routes/twitter');

var app = express();

// Set the public folder to serve public assets.
app.use(express.static(__dirname));

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
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Register all the routes.
app.use('/auth', auth);
app.use('/twitter', twitter);

// All other routes go to frontend.
app.get('*', function (req, res) {
  res.sendfile('./public/index.html');
});

// Development error handler (will print stacktrace)
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler (no stacktraces leaked to user)
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
