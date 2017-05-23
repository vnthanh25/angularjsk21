
var app = angular.module('app', []);

app.controller('bootstrapController', function($scope) {
	
	
	
	//alert('Hello bootstrap');
	$scope.title = "AAAA";
	
	$scope.changeTitle = function() {
		$scope.title = "BBBBB";
	}
});