
app.controller('navigatorController', function($scope, navigatorService) {
	// Khai bao ham (function) getAllMenus.
	$scope.getAllMenus = function() {
		// 1 mang (array) cac doi tuong menu.
		$scope.menus = navigatorService.getAllMenus();
	}
});