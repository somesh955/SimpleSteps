(function(){
	'use-strict';
<<<<<<< HEAD
angular.module('SimpleSteps',[])
	.factory('RegistrationService',['$scope',function($scope){
=======
	angular.module('SimpleSteps')
	.factory('RegistrationService',['$scope',function($scope){

>>>>>>> f788b86ebc494bf08a57d2eb48d0f657880657fa
		return {
			'getUsers': function(){
				return {"firstName":"Somesh","lastName":"Singh","email":"somesh955@gmail.com"};
			}
		};
	}]);

<<<<<<< HEAD
}());
=======
})();
>>>>>>> f788b86ebc494bf08a57d2eb48d0f657880657fa
