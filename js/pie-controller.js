var analyticapp_Controllers = angular.module('analyticapp_Controllers', []);





   analyticapp_Controllers.controller('PieCtrl2', ['$scope','mysql_data', function ($scope, StudentDataOp) {
   
	
	
	
    //$scope.google_datax;
    get_google_data();
	$scope.satisfactions=0;
    function get_google_data() {
        StudentDataOp.get_google_data()
	
            .success(function (studs) {
                $scope.google_data2 = studs;
				
				console.log(studs)
				
				var series_a=[]
				var labels=[]
				_.each($scope.google_data2 , function( row) {
				
			
			
				if(row.CATEGORY.toLowerCase()=="satisfied" || row.CATEGORY.toLowerCase()=="very satisfied"){
				$scope.satisfactions+=( Math.round(row.PERCENTAGE ))
				}
				
				if(row.CATEGORY!="Grand Total"){
				series_a.push( Math.round(row.PERCENTAGE ))
				labels.push( row.CATEGORY )
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
	
	
	
  }])
 

  analyticapp_Controllers.controller('PieCtrl', ['$scope','StudentDataOp', function ($scope, StudentDataOp) {
   
	
	
	  
    //$scope.google_datax;
    get_google_data();
	$scope.satisfaction=20;
    function get_google_data() {
        StudentDataOp.get_google_data('1AJyBkRbKA4Xyer5sviiD4ARBS1-GNJV5VtMOrvI24eo')
            .success(function (studs) {
                $scope.google_data = studs;
				
				var series_a=[]
				var labels=[]
				_.each($scope.google_data.results , function( row) {
				
				
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

