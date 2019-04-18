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