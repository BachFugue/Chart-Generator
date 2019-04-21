//DropParams Class
class Droperties{
	labels;
	csvData;
	data;
	datasets;
	datasetsBuilder;
	backgroundColor;
	borderColor;
	borderWidth;
	beginAtZero;
	type;
	data;
	options;
	backgroundColors = [
		[
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
		],
		[
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)'
            
		],
		[
			'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)'
        ],
        [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
		],
		[
            'rgba(153, 102, 255,0.2)',
            'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)'
		],
		[
            'rgba(255, 159, 64, 0.2)',
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255,0.2)',
		]
	];
	borderColors = [
		[
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
		],
		[
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
            
		],
		[
			'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)'
        ],
        [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
		],
        [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)'
		],
		[
            'rgba(255, 159, 64, 1)',
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
		]
		
	];
	label = [
		['Disney'],
		['Nike'],
		['Microsoft'],
		['Kodak'],
		['Apple'],
		['McDonalds'],
	];
	
	
	
	isRowLabel(){
		if(!this.csvData[0].some(isNaN)){
			return false;
		} else {
			return true;
		}	
	
	}
	
	separateLabelsFromData(){
		if(this.isRowLabel()){
			this.labels = this.csvData.shift();
			this.data = this.csvData;
		}
	}
	
	initDatasets(){
		this.separateLabelsFromData();
		
		this.datasets = new Array();
		// TODO build 3d data array
		var arrLength = this.data.length;
		for(var i=0; i<arrLength; i++){
			this.datasets.push({
				label: this.label[i][0],
				data: this.data[i],
				backgroundColor: this.backgroundColors[i],
				borderColor: this.borderColors[i]
				
			});
		}
		this.datasets.borderWidth = 1;
		console.log(this.datasets);
	}

	
	////////////////////
	//Drop Chart Init //
	////////////////////
	
	initType(){
		var dropTypeSelector = document.getElementById("chartType");
		this.type = dropTypeSelector.options[dropTypeSelector.selectedIndex].value;
	}
	
	initData(){
		this.initDatasets();
		this.data = {
		    labels: this.labels,
	        datasets: this.datasets
		};
	}
	
	initOptions(){
		this.options = {
			animation: {
				duration: 1000,
				easing: 'easeInOutQuad'
			},
			scales: {
				xAxes: [{
					scaleLabel: {
						labelString: "2017",
						display: true
					},
				}],
		        yAxes: [{
			        scaleLabel: {
						labelString: "USD in Billions",
						display: true
					},
		            ticks: {
		                beginAtZero: true
		            }
		        }]
		    },
		    legend: {
		        display: true,
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
