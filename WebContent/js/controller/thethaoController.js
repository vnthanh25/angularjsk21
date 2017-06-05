
app.controller('thethaoController', function($scope, thethaoService) {
	
	// get list.
	$scope.getLists = function() {
		$scope.lists = thethaoService.getLists();
	}
	
	$scope.changeItem = function() {
		alert($scope.selectedItem.name);
	}
});