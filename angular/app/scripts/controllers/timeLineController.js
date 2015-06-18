'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('TimeLineCtrl', ['$scope','$http', function($scope,$http) {
  	console.log('test');
  	$http.get("http://localhost:1338/customizeEvents")
  	.then(function(response) {
  		$scope.events = response.data;
  	});	

  }]);