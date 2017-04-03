 (function(){
	 'use-strict';
	angular.module('SimpleSteps')
	.config(function ($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'registration/registration.html',
			controller: 'RegistrationCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});

})();