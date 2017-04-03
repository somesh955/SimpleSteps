(function(){
    'use-strict';
    var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    
    var storySchema = Schema({
    creator : { type: Schema.Types.ObjectId, ref: 'Person' },
    title    : String,
    description : String,
    price: String,
    fans     : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
    });

    var Story  = mongoose.model('Story', storySchema);

    var save = function(Story,callback){ 
        Story.save(function(err, result){
            if(err){
                callback(err, null);
            }
            else {               
                callback(null, result);        
            } 
        });
    };

    Story.save = save;
    module.exports = Story;
}());