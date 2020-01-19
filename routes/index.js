var express = require('express');
var router = express.Router();
const { sanitizeBody } = require('express-validator');
var words = require('../public/data/positive_words.json');

var feedback_controller = require('../controllers/feedback.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  var word1 = words.words[Math.floor(Math.random() * words.words.length)];
  var word2 = words.words[Math.floor(Math.random() * words.words.length)];
  var word3 = words.words[Math.floor(Math.random() * words.words.length)];
  var word4 = words.words[Math.floor(Math.random() * words.words.length)];
  var word5 = words.words[Math.floor(Math.random() * words.words.length)];
  var word6 = words.words[Math.floor(Math.random() * words.words.length)];
  var word7 = words.words[Math.floor(Math.random() * words.words.length)];
  var word8 = words.words[Math.floor(Math.random() * words.words.length)];
  var word9 = words.words[Math.floor(Math.random() * words.words.length)];
  var word10 = words.words[Math.floor(Math.random() * words.words.length)];
  
  res.render('index', { one: word1, two: word2, three: word3, four: word4, five: word5, six: word6, seven: word7, eight: word8, nine: word9, ten: word10 });
});

router.post('/', sanitizeBody('*').trim().escape(), feedback_controller.create);

module.exports = router;
