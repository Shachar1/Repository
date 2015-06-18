'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
/**angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
  });
*/

angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope','$http', function($scope,$http) {
  	console.log('test');
  	$http.get("http://localhost:1338/customizeEvents")
	  	.then(function(response) {
	  		$scope.customizeEvents = response.data;
	  		//console.log($scope.customizeEvents);
	  	});
	$http.get("https://microsoft-apiappf0c347f9f902489eb15d7a00b0f0010c.azurewebsites.net/odata/Devices/$count", 
  	{
    	headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NvaW90LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1NTIzY2ExNGNiZTBjZjczMDMzNzk0MGIiLCJhdWQiOiJyQW5idXczRmRpQVVKdUxHVUVqNDRmZjAxd1RleUxYRSIsImV4cCI6MTQzMzE4Mzk5MiwiaWF0IjoxNDMzMTQ3OTkyfQ.HSFdta0xAB1Ov9YdCPJL2bjQp8KJ8KibAL_frctD-PY'}
	})
		.then(function(response){
			console.log('numberOfDevices');
			$scope.numberOfDevices = response.data;
		});  		
  }]);