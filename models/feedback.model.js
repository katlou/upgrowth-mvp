var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FeedbackSchema = new Schema(
  {
    my_name: {type: String, required: true, max: 100},
    their_name: {type: String, required: true, max: 100},
    words: {type: String, required: true, max: 500},
    time: { type : Date, default: Date.now }
  }
);

//Export model
module.exports = mongoose.model('Feedback', FeedbackSchema);
