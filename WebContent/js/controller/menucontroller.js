
app.controller('menucontroller', function($scope) {
	$scope.Title = 'Here is a menu view';
	
	// Khai bao ham (function) getAllMenus.
	$scope.getAllMenus = function() {
		var sub = ['Tư liệu', 'Phân tích', 'Người Việt 5 châu', 'Cuộc sống đó đây', 'Quân sự'];
		
		// khai bao cac doi tuong menu.
		var thegioi = {'id': 1, 'name': 'Thế giới', 'children': sub};
		var thethao = {'id': 2, 'name': 'Thể thao', 'children': []};
		var phapluat = {'id': 3, 'name': 'Pháp luật', 'children': []};
		var khoahoc = {'id': 4, 'name': 'Khoa học', 'children': []};
		
		
		// 1 mang (array) cac doi tuong menu.
		$scope.menus = [thegioi, thethao, phapluat, khoahoc];
	}
	
	// Goi hàm (call function) getAllMenus.
	$scope.getAllMenus();
});