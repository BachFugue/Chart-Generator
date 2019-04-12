

function dropChart(csvdata){
	var ctx = document.getElementById('chart').getContext('2d');
	
	//chart type
	var type = 'bar';
	
	//chart data
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
            label: 'WH40K attack stats',
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
// 	var data = ;
/*
	var data = {};
	var data.labels = ['Orks', 'Imperial Gaurd', 'Space Marines', 'Chaos Daemons', 'Tyranids', 'Eldar'];
	var data.datasets[data] = [12, 19, 3, 5, 2, 3];
*/
	
	//chart options
	var options = {
		scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
	};

	var myChart = new Chart(ctx, {
	    type: type,
	    data: data,
	    options: options
	});
}

function codeDisplay(csv){
var html = `
hello
`;

}