var Strategy = require('passport-twitter').Strategy;
var twitterApp = require('./twitterAppInfo');

module.exports = function (passport) {
  // Passport session setup.
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  // Configure VSO Passport strategy.
  passport.use(new Strategy({
    consumerKey: twitterApp.clientID,
    consumerSecret: twitterApp.clientSecret,
    callbackURL: twitterApp.callbackURL
  },
    function (token, tokenSecret, profile, done) {
      // Asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's Visual Studio Online profile is returned
        // to represent the logged-in user.  In a typical application, you would
        // want to associate the Visual Studio Online account with a user record in your
        // database, and return that user instead.
        profile.token = token;
        profile.tokenSecret = tokenSecret;
        return done(null, profile);
      });
    }
  ));
};
