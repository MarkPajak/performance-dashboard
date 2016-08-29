var analyticapp_Controllers = angular.module('analyticapp_Controllers', []);




 analyticapp_Controllers.controller('dashboard-controller', ['$scope','mysql_data','StudentDataOp', function ($scope, mysql_data,StudentDataOp) {
	
	$scope.datePicker="";
	  $scope.datePicker.date = {startDate: null, endDate: null};
	 console.log($scope.datePicker)
	 $scope.goCharts = function (dates) {
		 
		 $scope.satisfactions=0;
		 $scope.satisfaction=0;
		 $scope.satisfaction_day_count=0;
		 console.log(dates)
		 
		startDate=new Date(dates.startDate['_d'])
		var twoDigitMonth = startDate.getMonth()+1 + ""; if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
        var twoDigitDate = startDate.getDate() + ""; if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
      
		
		 var startDate = startDate.getFullYear()+"-"+twoDigitMonth+"-"+twoDigitDate;
		
		
		endDate=new Date(dates.endDate['_d'])
		var twoDigitMonth = endDate.getMonth()+1 + ""; if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
        var twoDigitDate = endDate.getDate()+1 + ""; if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
     
		 var endDate = endDate.getFullYear()+"-"+twoDigitMonth+"-"+twoDigitDate;
		
		
		console.log(endDate);
		 dates={"startDate":startDate,"endDate":endDate}
			get_mysql_data(dates)
			get_mysql_data_day_count(dates)
			 get_google_data2() 	 
	}
	
	
	dates={"startDate":[],"endDate":[]}


    //$scope.google_datax;
    get_mysql_data(dates);
		get_mysql_data_day_count(dates)
	$scope.satisfactions=0;
	
	
	
    function get_mysql_data(dates) {
        mysql_data.get_google_data(dates)
	
            .success(function (studs) {
                $scope.google_data = studs;
				
				console.log(dates.startDate['_d'])
				
				var series_a=[]
				var labels=[]
				_.each($scope.google_data.satisfaction_count , function( row) {
				
			
			
						if(row.CATEGORY.toLowerCase()=="satisfied" || row.CATEGORY.toLowerCase()=="very satisfied"){
						$scope.satisfactions+=( Math.round(row.PERCENTAGE ))
						}
						
						if(row.CATEGORY!="Grand Total"){
						series_a.push( Math.round(row.PERCENTAGE ))
						labels.push( row.CATEGORY )
						}
				
				})
				 $scope.labels2 = labels;
					$scope.data2 =series_a
					$scope.options2 = { legend: { display: false },
	tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
					
                    label: function(tooltipItems, data) { 
					
					var label =data.labels[tooltipItems.index]
                        return label+ " " + data.datasets[0].data[tooltipItems.index] + '%';
                    },	
				/*
					title:function(tooltipItems, data) { 
					
						var newDate=moment(tooltipItems[0].xLabel).format('MMMM Do YYYY')
                        return newDate 
                    }
					*/
                }
	}

					};
				
				})
		}
		
		
		
		    function get_mysql_data_day_count(dates) {
        mysql_data.get_google_data(dates)
	
            .success(function (studs) {
                $scope.google_data = studs;
				
				console.log(dates.startDate['_d'])
				
				var series_a=[]
				var labels=[]
				
				
			var series_a=[]
			var series_b=[]
			var series_c=[]
			var series_d=[]
			var series_e=[]
			
			var data_labels=[]
			console.log('makechart')
			
	
			
			
				_.each($scope.google_data.date_tally , function( row) {
				
			
			
						if(row.CATEGORY.toLowerCase()=="very satisfied" ){
							series_a.push({ x:row.date, y: (row.COUNT )})
						}
						
						
						if(row.CATEGORY.toLowerCase()=="satisfied" ){
							series_b.push({ x:row.date, y:  (row.COUNT )})
						}
						
						
						if( row.CATEGORY.toLowerCase()=="neither satisfied nor disatisfied"){
							series_c.push({ x:row.date, y: (row.COUNT )})
						}
						
						if(row.CATEGORY.toLowerCase()=="disatisfied" ){
							series_e.push({ x:row.date, y: (row.COUNT )})
						}
						
						if(row.CATEGORY.toLowerCase()=="very disatisfied" ){
							series_d.push({ x:row.date, y:  (row.COUNT )})
						}
						
						
						
						labels.push(row.date)
					
				
				})
					$scope.labels_day_count = labels;
					$scope.series_day_count = ['very satisfied', 'satisfied','neither satisfied nor disatisfied','disatisfied','very disatisfied'];
					
					
					$scope.data_day_count = [
												series_a,series_b,	series_c,series_d,	series_e
												];
					$scope.options_day_count = {
						showLabels:true,
					  scales: {
						 xAxes: [{
								type: 'time',
								time: {
									displayFormats: {
										 day: 'MMM DD'
									}
								}
								}],
						yAxes: [
						  {
							id: 'y-axis-1',
							type: 'linear',
							display: true,
							position: 'left'
						  }
						]
					   
						
					  },
				
				tooltips: {
								enabled: true,
								mode: 'single',
								callbacks: {
									title:function(tooltipItems, data) {
										var newDate=moment(tooltipItems[0].xLabel).format('MMMM Do YYYY')
										return newDate 
									}
								}
					}
					
					
					}
				
				})
		}
		
		
		
		
	  
    //$scope.google_datax;
    get_google_data2();
	$scope.satisfaction=0;
    function get_google_data2() {
        StudentDataOp.get_google_data('1AJyBkRbKA4Xyer5sviiD4ARBS1-GNJV5VtMOrvI24eo')
            .success(function (studs) {
                $scope.google_data2 = studs;
				
				var series_a=[]
				var labels=[]
				_.each($scope.google_data2.results , function( row) {
				
				
				if(row.CATEGORY!="Grand Total"){
				series_a.push( Math.round(row.PERCENTAGE ))
				labels.push( row.CATEGORY )
				}
				
				if(row.CATEGORY.toLowerCase()=="satisfied" ||row.CATEGORY.toLowerCase()=="fairly satisfied" ||row.CATEGORY.toLowerCase()=="very satisfied"){
				$scope.satisfaction+=( Math.round(row.PERCENTAGE ))
				}
				
				
				
				})
				 $scope.labels = labels;
					$scope.data =series_a
					$scope.options = { legend: { display: false },
					tooltips: {
								enabled: true,
								mode: 'single',
								callbacks: {
									
									label: function(tooltipItems, data) { 
									
									var label =data.labels[tooltipItems.index]
										return label+ " " + data.datasets[0].data[tooltipItems.index] + '%';
									},	
								/*
									title:function(tooltipItems, data) { 
									
										var newDate=moment(tooltipItems[0].xLabel).format('MMMM Do YYYY')
										return newDate 
									}
									*/
								}
					}

					};
				
				})
		}
	
	
	
  }]);

