App.service('dataService', [ '$http' , 'URL_API' ,  function( $http, URL_API){

        
            this.getData = function(data){

                return $http.post(URL_API).then(function(response){
                	return response.data;
                });

            }
        
}]);