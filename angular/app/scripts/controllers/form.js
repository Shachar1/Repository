'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('FormCtrl', ['$scope','$http', function($scope,$http) {
  	console.log('enter form controller')
       $scope.submit = function() {
       	console.log('enter submit scope ' + $scope.token)
        if ($scope.token) {
      		$http.get("http://localhost:64242/odata/RegisterDevice(Token='" + $scope.token + "')" ,
  			{
    			headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NvaW90LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1NTIzY2ExNGNiZTBjZjczMDMzNzk0MGIiLCJhdWQiOiJyQW5idXczRmRpQVVKdUxHVUVqNDRmZjAxd1RleUxYRSIsImV4cCI6MTQzMzc2ODUyNCwiaWF0IjoxNDMzNjgyMTI0fQ.7nP3sOguVH3XQaw0I51ZMDFM_OL0oB-sSB2Geoe6XaQ'}
	 	 	})
  			.then(function(response) {
	  		console.log(response.data.value);
	  		$scope.devices = response.data.value;
  		});	

        }
      };
}]);