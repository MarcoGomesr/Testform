var App = angular.module('TelRock', ['ngMessages', 'ui.router']);

//Define an angular module for our app
App.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/signin');

	$stateProvider
		.state('signin', {
			url: '/signin',
			templateUrl: 'signin.html',
			controller: 'signinController'
		})
		.state('login', {
			url: '/login',
			template: '<h1>About</h1>'
		});

}]);
