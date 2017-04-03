(function(){
    'use-strict';

    var Response = function(){
        var status = null;
        var message = null;
        var data = [];

        var getResponse= function(){
            return {
            "status": status,
            "message": message,
            "data" : data
            }
        };

        var setResponse= function(status, message, data){   
            this.status= status;
            this.message= message;
            this.data= data;    
        };
        
        return {
            'setResponse' : setResponse,
            'getResponse' : getResponse
        }
    };

    module.exports= Response;
}());