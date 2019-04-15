// Chart Type
var dc_typeSelector = document.getElementById("chartType");
var dc_typeValue = dc_typeSelector.options[dc_typeSelector.selectedIndex].value;
var DropChartType = dc_typeValue;

// Chart Constructor
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