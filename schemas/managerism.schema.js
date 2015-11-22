var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var random = require('mongoose-simple-random');

var Managerism = new Schema({
  quote: String,
  company: String
});

// Add plugin to return a random managerism.
Managerism.plugin(random);

module.exports = mongoose.model('Managerism', Managerism);
