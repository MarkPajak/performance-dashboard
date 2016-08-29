
  app.controller('LineCtrl', ['$attrs','$scope','GApi', 'GAuth','data_service', 
  

 


    function($attrs,$scope,GApi, GAuth,data_service) {
   
			var report_request={ "reportRequests":[
												  {
													"viewId":VIEW_ID,
													"dateRanges":[
													  {
														"startDate":"2015-01-01",
														"endDate":"today"
													  }],
													"metrics": [
												{"expression": "ga:uniquePageviews"},
												{"expression": "ga:users"}
											  ],
											  "dimensions": [{"name": "ga:date"}]
												  }]
								}
					
					
				

	
 
 
					 gapi.analytics.ready(function() {
									  
									  console.log($attrs.token)
									  gapi.analytics.auth.authorize({
										'serverAuth': {
										  'access_token': $attrs.token
										}
									  });

									 queryReports();
						});
 

    
						function queryReports() {
											// Load the API from the client discovery URL.
										  gapi.client.load(DISCOVERY
											).then(function() {
												// Call the Analytics Reporting API V4 batchGet method.
												gapi.client.analyticsreporting.reports.batchGet(report_request).then(function(response) {
															makechart(response.result.reports[0].data.rows)
													})
													.then(null, function(err) {
														// Log any errors.
														console.log(err);
													});
										});
					  
						}
	
	
	function makechart(data){

			var series_a=[]
			var series_b=[]
			var data_labels=[]
			console.log('makechart')
			
			_.each(data, function( row) {
				
					series_a.push({ x:row.dimensions[0], y: row.metrics[0].values[0] })
					series_b.push({ x:row.dimensions[0], y: row.metrics[0].values[1] })
					data_labels.push(row.dimensions[0])

			});

	
			$scope.labels =data_labels
			$scope.series = ['uniquePageviews', 'users'];
			$scope.data = [
					series_a,series_b
					];
			$scope.onClick = function (points, evt) {
			  console.log(points, evt);
			};
			$scope.onHover = function (points) {
			  if (points.length > 0) {
				console.log('Point', points[0].value);
			  } else {
				console.log('No point');
			  }
			};
			$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];

				$scope.options = {
				  scales: {
					 xAxes: [{
							type: 'time',
							time: {
								displayFormats: {
									quarter: 'MMM YYYY'
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
	
	}
					

    }
	
]);