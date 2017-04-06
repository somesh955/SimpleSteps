
// Passport management
var BearerStrategy   = require('passport-http-bearer').Strategy;
var jwt              = require('jsonwebtoken');
var LocalStrategy = require('passport-local').Strategy;
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/person');
var users = [{username:'taxi', password:'application'}];
//var constantObj = require('./constants.js');

// Module exports
module.exports = function(passport) {
  //admin login
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('adminLogin', new LocalStrategy(
    function(username, password, done) {
      adminLoginObj.findOne({
        username: username
      }, function(err, adminuser) {
        if (err) {
          return done(err);
        }
        if (!adminuser) {
          return done(null, false);
        }else{
          adminuser.comparePassword(username,password, function(err, user) {
            if (user) {
              return done(null, user);
            } else {
              return done(null, false, {
                message: 'Incorrect password.'
              });
            }
          });
        }
      });
    }
  ));

  passport.serializeUser(adminLoginObj.serializeUser);  // this  wll be called by passpoert after the authentication success
  passport.deserializeUser(adminLoginObj.deserializeUser);

    // Bearer token based authentication
    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      });
    });
     passport.use('bearer', new BearerStrategy(function (token, done) {

        jwt.verify(token, constantObj.config.sceret, function (err, user) {
              if (err) {
                  return done(err);
              } else {
                  if(user){
                      return done(null, user);
                  }else{
                      return done(null, false);
                  }
              }
        });
    }));

    passport.use('basic',new BasicStrategy({}, function (username, password, done) {

        findByUsername(username, function(err, user) {
          if (err) { return done(err); }
              if (!user) { return done(null, false); }
              if (user.password != password) { return done(null, false); }
              return done(null, user);
          });
      }
    ));


    function findByUsername(username, fn) {
      for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.username === username) {
          return fn(null, user);
        }
      }
      return fn(null, null);
    }


    //admin login

      passport.use('local', new LocalStrategy({usernameField: 'email'},
        function(email, password, done) {
          User.findOne({email: email}).populate("role").exec(function(err, user) {
            console.log(err);
            if(err) {
                   //return done(err);
                   return done(null, false);
            }

            if(!user) {
              return done(null, false);
            }
            if(user && (user.password == utility.getEncryptText(password)) ){
                return done(null, user);
            }
            //if(user.password != password) {
                  return done({status: "Failure"});
          //  }


            //returning specific data


          });
        }
      ));

}
