// Get Context
var ctx = document.getElementById('chart').getContext('2d');

// Chart Class
class DropChart{
	
	constructor(type, data, options){
		
		new Chart(ctx, {
		    type: type,
		    data: data,
		    options: options
		});
	}

}