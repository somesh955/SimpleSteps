(function(){
    'use-strict';
    var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    
    var personSchema = Schema({
    name    : String,
    age     : Number,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
    });
    var Person = mongoose.model('Person', personSchema);

    var personList = function(callback){
        Person.find({}).populate({path:'stories', populate:{path:'fans'}}).exec(function(err, result){
            if(err) callback(err,null);
            callback(null,result);
        });
    };

    var save = function(Person, callback){
        Person.save(function(err, result){
            if(err){
                callback(err, null);
            }
            else{
                callback(null,result);
            }          
        });  
    };
    Person.save = save;
    Person.getAll = personList;
    module.exports = Person;
}());
