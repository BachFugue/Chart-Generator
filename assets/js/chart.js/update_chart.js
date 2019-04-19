function updateChart(){
	
	// Hide/Show Fields
	var toggleTitle = $('#toggleTitle').children("option:selected").val();
	dropChart.chart.options.title.display = toggleTitle;
	console.log(toggleTitle);
	
	var toggleLegend = $('#toggleLegend').children("option:selected").val();
	dropChart.chart.options.legend.display = toggleLegend;
	console.log(toggleLegend);
	
	// Field Values
	if (($('#chartTitle').val().length != 0) && toggleTitle){
		dropChart.chart.options.title.text = chartTitle.value;
		console.log("chartTitle.value: " + chartTitle.value);
	}
	
	if (($('#chartLegend').val().length != 0) && toggleLegend){
		dropChart.chart.data.datasets[0].label = chartLegend.value;
		console.log("chartLegend.value: " + chartLegend.value);
	}
	
	dropChart.update({
		duration: 2000,
		easing: 'easeOutBounce'
	});
}