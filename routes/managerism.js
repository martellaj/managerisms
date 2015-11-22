var express = require('express');
var router = express.Router();
var Managerism = require('../schemas/managerism.schema');
var Submission = require('../schemas/submission.schema');

// GET /managerism
router.get('/', function (req, res) {
  Managerism.findOneRandom(function (err, managerism) {
    if (err) {
      res.json(err);
    } else {
      res.json(managerism);
    }
  });
});

// POST /managerism/submit
router.post('/submit', function (req, res) {
  var quote = req.body.quote;
  var company = req.body.company;

  var submission = new Submission({
    quote: quote,
    company: company
  });

  submission.save(function (err, submission) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
