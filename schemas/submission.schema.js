var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Submission = new Schema({
  quote: String,
  company: String,
  emailAddress: String
});

module.exports = mongoose.model('Submission', Submission);
