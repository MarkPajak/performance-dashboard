'use strict';
/* app */
var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

var dashboardapp = angular.module('dashboardapp', [
		'ngRoute',
		//'museum_objectcatAnimations',
		//'museum_objectcatControllers',
		//'museum_objectcatFilters',
		//'museum_objectcatServices',
		'angularUtils.directives.dirPagination',
		"ngSanitize",
		'underscore',
		'ngScrollbar',
		'ngMaterial',
		'ngTimeline',
		'angularGrid',
		'formly', 
		'formlyBootstrap',
		'ngRoute',
		'chart.js',
		'ui.bootstrap',
		'data_services',
		'StudentService',
		'angular-google-gapi',
		'analyticapp_Controllers',
		'daterangepicker'
		]);
		
dashboardapp.config(function(ChartJsProvider) {


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
		
dashboardapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'html/dashboard.html',
        controller: 'dashboard-controller'
      }).
	  when('/satisfaction', {
        templateUrl: 'html/dashboard-satisfaction.html',
        controller: 'dashboard-controller'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

dashboardapp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

dashboardapp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

dashboardapp.controller('contactController', function($scope,$location) {
    $scope.pageClass = 'page-contact';
	$scope.currentPath = $location.path();
	
});



/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}