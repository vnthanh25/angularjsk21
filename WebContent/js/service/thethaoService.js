
app.service('thethaoService', function($http) {
 	
 	this.getLists = function() {

 		var bongda = {'id': 1, 'name': 'Bóng đá'};
 		var tennis = {'id': 2, 'name': 'Tennis'};
 		var caulong = {'id': 3, 'name': 'Cầu lông'};
	 	var lists = [bongda, tennis, caulong];

	 	return lists;
	};
	
	// Get player from item.
	this.getPlayers = function(item) {
		var result = [];
		// 1. bongda
		if(item.id === 1) {
			result.push({'name': 'player 111'});
			result.push({'name': 'player 222'});
			result.push({'name': 'player 333'});
		}
		// 2. tennis
		else if(item.id === 2) {
			result.push({'name': 'player 444'});
			result.push({'name': 'player 555'});
			result.push({'name': 'player 666'});
		}
		//.....
		return result;
	}
});