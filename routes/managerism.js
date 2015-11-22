var express = require('express');
var router = express.Router();
var Managerism = require('../schemas/managerism.schema');

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

module.exports = router;
