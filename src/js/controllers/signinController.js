App.controller('signinController', [ '$scope', 'dataService', '$q', function($scope, dataService, $q) {
	
	// $scope.data = {
	// 	accountNumber: "",
	// 	datebirth: "",
	// 	postcode: "",
	// 	lastname: "",
	// 	phonenumber: "",
	// }

	//================= 1 =================

	dataService.getData().then(function(response){
		$scope.data = response;
		console.log($scope.data);
	});

	//================= 1 =================




}]);