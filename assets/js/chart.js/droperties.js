//DropParams Class
class Droperties{
	labels = ['this', 'that'];
	csvData = [1, 2];
	backgroundColor;
	borderColor;
	borderWidth;
	beginAtZero;
	type;
	data;
	options;
	
	
	constructor(){
		
	}
	
/*
	getChartType(){
		this.type = $('#chartType').children("option:selected").val();
	}
*/
	
	isFirstRowLabel(){
		if(!this.csvData[0].some(isNaN)){
			return false;
		} else {
			return true;
		}	
	
	}
	
	separateLabelsFromData(){
		if(this.csvData[0].some(isNaN)){
			this.labels = this.csvData.shift();
		}
	}
	
	initDataForOneDimensional(){
		this.separateLabelsFromData();
		this.csvData = this.csvData[0]
	}
	
	initDataForTwoDimensional(){
		this.separateLabelsFromData();
	}
	
	
	////////////////////
	//Drop Chart Init //
	////////////////////
	
	initType(){
		var dropTypeSelector = document.getElementById("chartType");
		this.type = dropTypeSelector.options[dropTypeSelector.selectedIndex].value;
	}
	
	initData(){
		this.data = {
		    labels: this.labels,
	        datasets: [{
	            label: '# of Votes',
	            data: this.csvData,
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
		};
	}
	
	initOptions(){
		this.options = {
			scales: {
		        yAxes: [{
		            ticks: {
		                beginAtZero: true
		            }
		        }]
		    },
		    legend: {
		        display: false,
		        labels: {
		            fontColor: 'rgb(0, 0, 0)'
		        }
		    },
		    title: {
		        display: false
		    }
		};
	}
	
}

// var droperties = new Droperties();
