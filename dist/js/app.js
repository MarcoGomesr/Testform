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

App.controller('signinCtrl', [ '$scope', '$http',  function($scope, $http) {
	$http.post('https://private-77a70-testdummyapi.apiary-mock.com/idv/process')

		.then(function(data){								
			$scope.data = data;
		});
	
	$scope.data = {
		accountNumber: "",
		datebirth: "",
		postcode: "",
		lastname: "",
		phonenumber: "",
	}

	
}]);