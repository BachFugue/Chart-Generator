//DropParams Class
class Droperties{
	labels = ['this', 'that'];
	csvData = [1, 2];
	backgroundColor;
	borderColor;
	borderWidth;
	beginAtZero;
	type = 'bar';
	data;
	options;
	
	
	constructor(){
		
	}
	
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
	
	initDataForBar(){
		this.separateLabelsFromData();
		this.csvData = this.csvData[0]
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
		        label: 'Data',
		        data: this.csvData,
		        backgroundColor: [
		            'rgba(242, 231, 80, 0.5)',
		            'rgba(115, 12, 2, 0.5)',
		            'rgba(166, 159, 70, 0.5)',
		            'rgba(115,104,48, 0.5)',
		            'rgba(217, 154, 77, 0.5)',
		            'rgba(165, 62, 38, 0.5)',
		            'rgba(242, 231, 80, 0.5)',
		            'rgba(115, 12, 2, 0.5)',
		            'rgba(166, 159, 70, 0.5)',
		            'rgba(115,104,48, 0.5)',
		            'rgba(217, 154, 77, 0.5)',
		            'rgba(165, 62, 38, 0.5)'
		        ],
		        borderColor: [
		            '#F2E750',
		            '#730C02',
		            '#A69F46',
		            '#736830',
		            '#D99A4E',
		            '#a53e26',
					'#F2E750',
		            '#730C02',
		            '#A69F46',
		            '#736830',
		            '#D99A4E',
		            '#a53e26'
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
		        display: true,
		        text: 'Custom Chart Title'
		    }
		};
	}
	
}

// var droperties = new Droperties();
