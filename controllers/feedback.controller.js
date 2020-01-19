const Feedback = require('../models/feedback.model');

exports.create = function (req, res) {

  var word_num = [req.body.checkboxOne, req.body.checkboxTwo, req.body.checkboxThree, req.body.checkboxFour, req.body.checkboxFive, req.body.checkboxSix, req.body.checkboxSeven, req.body.checkboxEight, req.body.checkboxNine, req.body.checkboxTen]
  var word_list = "";
  var i = 0;

  for (i = 0; i < 10; i++) {
    console.log(word_num[i]);
    if (word_num[i]) {
      if (word_list == "") {
        word_list = word_list + word_num[i];
      } else {
        word_list = word_list + ", " + word_num[i];
      }
    }
  }

  if (req.body.otherWord) {
    word_list = word_list + ", " + req.body.otherWord;
  }

  let feedback = new Feedback(
      {
          my_name: req.body.myName,
          their_name: req.body.theirName,
          words: word_list
      }
  );

  feedback.save(function (err) {
      if (err) {
          console.log(err)
      }
      res.render('thank-you');
  })
};
