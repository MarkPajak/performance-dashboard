(function () {
  'use strict';

  
/* App Module */
var underscore = angular.module('underscore', []);

  
var app = angular.module('examples', [
		'ngRoute',
		'chart.js',
		'ui.bootstrap',
		'data_services',
		'StudentService',
		'underscore',
		'angular-google-gapi'
		
	
]) 


	  
.config(function(ChartJsProvider) {


    // Configure all charts
    ChartJsProvider.setOptions({
      colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('doughnut', {
      cutoutPercentage: 60
    });
    ChartJsProvider.setOptions('bubble', {
      tooltips: { enabled: false }
    });
  })
  
  
 
  .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/digital', {
        templateUrl: 'html/piechart.html',
        controller: 'PieCtrl2'
      }).
	   when('/', {
         templateUrl: 'html/screensaver.html',
        controller: 'screen_saver'
      }).

      otherwise({
        redirectTo: '/'
      });
  }]);
  
  
  
  

  app.controller('MenuCtrl', ['$scope', function ($scope) {
    $scope.isCollapsed = true;
    $scope.charts = ['Line', 'Bar', 'Doughnut', 'Pie', 'Polar Area', 'Radar', 'Horizontal Bar', 'Bubble', 'Base'];
  }]);




  function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }
})();
