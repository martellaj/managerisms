var express = require('express');
var Twitter = require('twitter');
var twitterApp = require('../config/twitterAppInfo');
var router = express.Router();

// POST /twitter/tweet
//    Managerism is extracted from the body and then
//    used to post a tweet to the authenticated user's
//    timeline.
router.post('/tweet', function (req, res, next) {
  if (req.isAuthenticated()) {
    // Use the Twitter library to send the request. Build the
    // client object here.
    var client = new Twitter({
      consumer_key: twitterApp.clientID,
      consumer_secret: twitterApp.clientSecret,
      access_token_key: req.user.token,
      access_token_secret: req.user.tokenSecret
    });

    // Adds the hashtag if there's room for it.
    // Just tweets the managerism if there's no room for the hashtag.
    // Returns an error if the managerism is too long.
    if (req.body.tweet.length <= 128) {
      req.body.tweet = req.body.tweet + ' #managerism';
    } else if (req.body.tweet.length <= 140) {
      // Tweet is fine.
    } else {
      // Tweet is too long. Sorry, user!
      res.sendStatus(400);
    }

    // Tweet the managerism.
    client.post('statuses/update', { status: req.body.tweet }, function (error, tweet, response) {
      if (!error) {
        res.sendStatus(200);
      } else {
        // Twitter messed up.
        res.sendStatus(402);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
