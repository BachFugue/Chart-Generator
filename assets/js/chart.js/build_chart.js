// Chart Type
function dropChartType(){
	var dropTypeSelector = document.getElementById("chartType");
	var type = dropTypeSelector.options[dropTypeSelector.selectedIndex].value;
	console.log(type);
	return type;
}


// Chart Data
function dropChartData(datasetsData, labels){

	var data = {
	    labels: labels,
	    datasets: [{
	        label: 'Data',
	        data: datasetsData,
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
	console.log(data);
	return data;
}

// Chart Options
function dropChartOptions(){
	var options = {
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
	console.log(options);
	return options;
}

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