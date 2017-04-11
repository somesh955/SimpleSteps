<<<<<<< HEAD
(function(){
  'use-strict';
  var express = require('express');
  var router = express.Router();
  var Response = require('../config/response')();
  var DBConnection= require('../config/database')();
  var PersonCtrl = require('../controllers/person.controller')();
  var jwt = require('jsonwebtoken');

  var authRoutes = function(upload){
    router.get('/users', function(req, res, next) {
      console.log(req);
      PersonCtrl.getPersonList(function(err, result){
          if(err) res.status(302).jsonp(err);
          res.status(200).jsonp(result); 
      });                    
    });

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

    router.post('/authenticate', function(req, res, next) {
      console.log(req.body.username);
      var myToken = jwt.sign({'username':req.body.username},"SOMESH@955");
      res.status(200).json({"token":myToken});     
    });

    router.post('/uploadFiles', function (req, res) {
      upload(req, res, function (err) {
        if (err) {
          return res.end(err.toString());
        }
    
        res.end('File is uploaded');
      });
    });

    return router
  }

  module.exports = authRoutes;

}());
