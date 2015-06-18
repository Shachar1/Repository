'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

 //https://microsoft-apiappf0c347f9f902489eb15d7a00b0f0010c.azurewebsites.net/odata/Devices
angular.module('sbAdminApp')
  .controller('DeviceCtrl', ['$scope','$http', function($scope,$http) {
  	console.log('test');
  	$http.get("http://localhost:64242/odata/Devices", 
  	{
    	headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NvaW90LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1NTIzY2ExNGNiZTBjZjczMDMzNzk0MGIiLCJhdWQiOiJyQW5idXczRmRpQVVKdUxHVUVqNDRmZjAxd1RleUxYRSIsImV4cCI6MTQzMzc2ODUyNCwiaWF0IjoxNDMzNjgyMTI0fQ.7nP3sOguVH3XQaw0I51ZMDFM_OL0oB-sSB2Geoe6XaQ'}
	  })
  	.then(function(response) {
  		console.log(response.data.value);
  		$scope.devices = response.data.value;
  	});	

  }]);