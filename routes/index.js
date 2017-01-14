var express = require('express');
var router = express.Router();
var path = '../views/';

/* GET home page. */
router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

module.exports = router;
