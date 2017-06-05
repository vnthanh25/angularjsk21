
app.service('navigatorService', function($http) {
 	
 	this.getAllMenus = function() {
 		
		var sub = ['Tư liệu', 'Phân tích', 'Người Việt 5 châu', 'Cuộc sống đó đây', 'Quân sự'];
		// khai bao cac doi tuong menu.
		var thegioi = {'id': 1, 'name': 'Thế giới', 'url': 'thegioi', 'children': sub};
		var thethao = {'id': 2, 'name': 'Thể thao', 'url': 'thethao', 'children': []};
		var phapluat = {'id': 3, 'name': 'Pháp luật', 'url': 'phapluat', 'children': []};
		var khoahoc = {'id': 4, 'name': 'Khoa học', 'url': 'khoahoc', 'children': []};
		// 1 mang (array) cac doi tuong menu.
	 	var menus = [thegioi, thethao, phapluat, khoahoc];
	 	
	 	
	 	// Return menu data.
	 	return menus;
	};
});