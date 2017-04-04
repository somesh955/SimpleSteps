(function(){
    'use-strict';
    var PersonModel=require('../models/person');
    var StoryModel = require('../models/story');
    var PersonController = function(){
        return{
            'getPersonList' : function(callback){
                 PersonModel.getAll(callback);
            },
            'setPerson1' : function(personData,callback){
                var storyList = personData.stories;
                var length = storyList.length;
                var finalRes = [];
                storyList.forEach(function(storyObj){  
                    var Story = new StoryModel(storyObj);
                    StoryModel.save(Story, function(err,response){
                        if(err){          
                            callback(null,err);
                        }else{
                            length--;
                            finalRes.push(response._id);
                            if(length === 0) {
                                personData.stories = [];
                                finalRes.forEach(function(id){
                                    personData.stories.push(id);
                                });
                                var Person = new PersonModel(personData);
                                PersonModel.save(Person,callback);
                            }                                          
                        }   
                    });
                });               
            },
            'setPerson' : function(personData,callback){
                var storyList = personData.stories;
                delete personData.stories;
                var Person = new PersonModel(personData);
                PersonModel.save(Person,function(err, PersonObj){
                    if(err){          
                        callback(null,err);
                    }else{                        
                        var length = storyList.length;
                        storyList.forEach(function(storyData){ 
                            storyData.creator = PersonObj._id;
                            var Story = new StoryModel(storyData);
                            StoryModel.save(Story, function(err,StoryObj){
                                if(err){          
                                    callback(null,err);
                                }else{
                                    
                                    PersonObj.stories.push(StoryObj._id);
                                    if(--length === 0) 
                                        PersonModel.save(PersonObj,callback);
                                }
                            });
                        });
                    }
                });      
            }
        }
    }

    module.exports = PersonController;
}());