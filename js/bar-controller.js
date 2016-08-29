


  analyticapp_Controllers.controller('BarCtrl', ['$scope','StudentDataOp', function ($scope,StudentDataOp) {
  
   $scope.status;
    $scope.google_data;
    get_google_data();

    function get_google_data() {
        StudentDataOp.get_google_data('13OssmallS7QtuJbPWT7auEe2wvx768EEc7xIsIByq58')
            .success(function (studs) {
                $scope.google_data = studs;
				
			
           	var series_a=[]
			var series_b=[]
			
			var series_c=[]
			var series_d=[]
			
			var series_e=[]
			var series_f=[]
			
			var series_g=[]
			var series_h=[]
			
			var series_i=[]
			var series_j=[]
			
			var series_k=[]
			var series_l=[]
			
			
			var data_labels=[]
		
			
			_.each($scope.google_data.overall , function( row) {
				
					series_a.push( row.BMAG )
					series_b.push( row.BMAG2015)
					
					series_c.push( row.MShed )
					series_d.push( row.MShed2015)
					
					series_e.push( row.GeorgianHouse )
					series_f.push( row.GeorgianHouse2015)
					
					series_g.push( row.RedLodge )
					series_h.push( row.RedLodge2015)
					
					
					series_i.push( row.Blaise )
					series_j.push( row.Blaise2015)
					
					series_k.push( row.BRO )
					series_l.push( row.BRO2015)
					
					data_labels.push( row.Quarter)
					//data_labels.push(row.dimensions[0])

			});

			
    $scope.options = {

	   legend: { display: true } 

	
	
	}
			$scope.labels = data_labels;
			$scope.series = ['Bristol Museum & Art Gallery', 'BMAG 2015','M Shed','MShed 2015','Georgian House','Georgian House 2015','Red Lodge','Red Lodge 2015','Blaise','Blaise 2015','BRO','BRO 2015'];
			$scope.data = [
			  series_a,
			  series_b,
			  series_c,
			  series_d,
			  series_e,
			  series_f,
			  series_g,
			  series_h,
			  series_i,
			  series_j
			];

$scope.data2 = [
			  series_a,
			  series_b
			  ]
$scope.labels2 =['Bristol Museum & Art Gallery','M Shed','Georgian House','Red Lodge','Blaise','BRO'];

		   })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
	
	

  }]);