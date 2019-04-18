//DropParams Class
class Droperties{
	type = 'bar';
	labels = ['this', 'that'];
	rawData = [1, 2];
	data;
	backgroundColor;
	borderColor;
	borderWidth;
	beginAtZero;
	
	constructor(){
		
	}
	
	isFirstRowLabel(){
		if(!this.rawData[0].some(isNaN)){
			return false;
		} else {
			return true;
		}	
	
	}
}

// var droperties = new Droperties();
