function CSVChart(csv){
	var ctx = document.getElementById('chart').getContext('2d');
	var data = [12, 19, 3, 5, 2, 3];
	var labels = ['Orks', 'Imperial Gaurd', 'Space Marines', 'Chaos Daemons', 'Tyranids', 'Eldar'];
	if (typeof csv === 'undefined' || csv === null) {
	    
	} else {
		data = csv[0];
		console.log(csv);
	}
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: labels,
	        datasets: [{
	            label: 'WH40K attack stats',
	            data: data,
	            backgroundColor: [
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
	                '#a53e26'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
}