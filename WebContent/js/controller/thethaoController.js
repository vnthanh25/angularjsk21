
app.controller('thethaoController', function($scope, thethaoService) {
	
	// get list.
	$scope.getLists = function() {
		$scope.lists = thethaoService.getLists();
		//$scope.lists = [];
		if($scope.lists && $scope.lists.length > 1) {
			// Selected default item is the first item.
			$scope.selectedItem = $scope.lists[1];
			$scope.changeItem();
		} else {
			alert('List is empty.');
		}
		
	}
	
	$scope.changeItem = function() {
		//alert($scope.selectedItem.name);
		$scope.players = thethaoService.getPlayers($scope.selectedItem);
	}
	
	
	$scope.addPlayer = function() {
		var player = { 'name': $scope.playerName };
		$scope.players.push(player);
	}
});