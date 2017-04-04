(function(){
    'use-strict';

    var connectDB = function(){
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/myApp');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function callback () {
            console.log("running...");
        });
    };
    
    module.exports = connectDB;
}());