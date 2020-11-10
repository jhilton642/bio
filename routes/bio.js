var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('bio', { name: 'Josh Hilton',age:20,dob:'01/01/2000',height:"5'10" });
  });
  
  module.exports = router;