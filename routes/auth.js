module.exports = function (passport) {
  var express = require('express');
  var router = express.Router();

  // GET /auth/twitter
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request. After authorization, Twitter will redirect the user back
  //   to this application at /auth/twitter/callback.
  router.get('/twitter',
    passport.authenticate('twitter'),
    function (req, res) {
      // The request will be redirected to Visual Studio Online for authentication, so
      // this function will not be called.
    });

  // GET /auth/twitter/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request. If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  router.get('/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    function (req, res) {
      res.redirect('/');
    });

  // GET /auth/twitter/logOut
  //    Use the .logOut function exposed by Passport to clear the user from
  //    the session and redirect back to the homepage.
  router.get('/twitter/logOut', function (req, res) {
    req.logOut();
    res.redirect('/');
  });

  // GET /auth/twitter/isSignedIn
  //    Just checks if their is an authenticated user and lets the
  //    client know.
  router.get('/twitter/isSignedIn', function (req, res) {
    if (req.isAuthenticated()) {
      res.json({
        user: req.user
      });
    } else {
      res.sendStatus(401);
    }
  });

  return router;
};
