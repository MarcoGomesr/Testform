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