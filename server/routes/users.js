var express = require('express');
var router = express.Router();
var Response = require('../config/response')();
var DBConnection= require('../config/database')();
var PersonCtrl = require('../controllers/person.controller')();

/* GET users listing. */
router.get('/', function(req, res, next) {
  PersonCtrl.getPersonList(function(err, result){
      if(err) res.status(302).jsonp(err);
      res.status(200).jsonp(result); 
  });                    
});

router.post('/', function(req, res, next) {
   PersonCtrl.setPerson(req.body,function(err, result){
      if(err) res.status(302).jsonp(err);
      res.status(200).jsonp(result); 
  });  
});

module.exports = router;
