
app.controller('navigatorController', function($scope, navigatorService, $mdDialog) {
	
	  $scope.status = '  ';
	  $scope.customFullscreen = false;
	
	
	// Khai bao ham (function) getAllMenus.
	$scope.getAllMenus = function() {
		// 1 mang (array) cac doi tuong menu.
		$scope.menus = navigatorService.getAllMenus();
	}
	
	
	

	  $scope.showConfirm = function(ev) {
	    // Appending dialog to document.body to cover sidenav in docs app
	    var confirm = $mdDialog.confirm()
	          .title('Would you like to delete your debt?')
	          .textContent('All of the banks have agreed to forgive you your debts.')
	          .ariaLabel('Lucky day')
	          .targetEvent(ev)
	          .ok('Please do it!')
	          .cancel('Sounds like a scam');

	    $mdDialog.show(confirm).then(function() {
	      $scope.status = 'You decided to get rid of your debt.';
	    }, function() {
	      $scope.status = 'You decided to keep your debt.';
	    });
	  };
	
	  
});