(function(){
	'use-strict';
	angular.module('SimpleSteps')
	.factory('RegistrationService',['$scope',function($scope){

		return {
			'getUsers': function(){
				return {"firstName":"Somesh","lastName":"Singh","email":"somesh955@gmail.com"};
			}
		};
	}]);

})();