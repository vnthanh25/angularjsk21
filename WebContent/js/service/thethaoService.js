
app.service('thethaoService', function($http) {
 	
 	this.getLists = function() {

 		var bongda = {'id': 1, 'name': 'Bóng đá'};
 		var tennis = {'id': 2, 'name': 'Tennis'};
 		var caulong = {'id': 3, 'name': 'Cầu lông'};
	 	var lists = [bongda, tennis, caulong];

	 	return lists;
	};
});