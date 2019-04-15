// Chart Type
var dc_typeSelector = document.getElementById("chartType");
var dc_typeValue = dc_typeSelector.options[dc_typeSelector.selectedIndex].value;
var DropChartType = dc_typeValue;

// Chart Data
function dropChartData(csvdata){
	if (typeof csvdata === 'undefined' || csvdata === null) {
	    var dataset = [12, 19, 3, 5, 2, 3];
	} else {
		dataset = csvdata[1];
		console.log(dataset);
	}
	
	var labels = csvdata[0];
	
	var data = {
	    labels: labels,
	    datasets: [{
	        label: false,
	        data: dataset,
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
	return options;
}

// Chart Class
class DropChart{
	
	constructor(type, data, options){
		
		var ctx = document.getElementById('chart').getContext('2d');
		
		dropChart = new Chart(ctx, {
		    type: type,
		    data: data,
		    options: options
		});
	}
	
}





// var dropChart;

function dropChart(csvdata){
	var ctx = document.getElementById('chart').getContext('2d');
	
	//chart type
	var type = 'line';
	
	//chart data
	if (typeof csvdata === 'undefined' || csvdata === null) {
	    var dataset = [12, 19, 3, 5, 2, 3];
	} else {
		dataset = csvdata[1];
		console.log(dataset);
	}
}

function updateChart(){
	if ($('#chartTitle').val().length != 0){
		dropChart.chart.options.title.text = chartTitle.value;
	}
	
	var hideTitle = $('#hideTitle').children("option:selected").val();
	dropChart.chart.options.title.display = hideTitle;
	console.log("hideTitle: " + hideTitle);
	
	if ($('#chartLegend').val().length != 0){
		dropChart.chart.data.datasets[0].label = chartLegend.value;
	}
	
	var hideLegend = $('#hideLegend').children("option:selected").val();
	dropChart.chart.options.legend.display = hideLegend;
	console.log("hideLegend: " + hideLegend);
	
	dropChart.update({
		duration: 800,
		easing: 'easeOutBounce'
	});
}