var App = angular.module('TelRock', ['ngMessages', 'ngRoute']);

//Define an angular module for our app
App.config(['$routeProvider',
	function($routeProvider) {

	//Define Routing for app
	//Uri / -> template signing.html
	//Uri /login -> template slogin.html
		$routeProvider
			.when('/', {
				templateUrl: '/signin.html',      
				controller: 'signinCtrl'
			})

			.when('/login', {
				templateUrl: 'login.html'        
			})

			.otherwise({
				redirectTo: '/'
			});
}]);
