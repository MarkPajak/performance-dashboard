var museum_objectcatServices = angular.module('data_services', ['ngResource']);
var CLIENT_ID = '1045272594338-085g28t8ka7r36qg5o8002bg74i15tpt.apps.googleusercontent.com';
var VIEW_ID = '85821358';

var DISCOVERY = 'https://analyticsreporting.googleapis.com/$discovery/rest';

var SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];

museum_objectcatServices.factory('data_service', ['$resource',
    function($resource) {

        return {
            get_data: function() {

            }
        }
    }
]);
var get_google_data = angular.module('StudentService', [])

get_google_data.factory('mysql_data', ['$http', function($http) {
    //this is a google script   
    var urlBase = 'http://markpajak.co.uk/mark/kiosk-feedback/datafeed.php';
    var StudentDataOp = {};

    StudentDataOp.get_google_data = function(dates) {
			
        return $http.get(urlBase +'?startDate='+dates.startDate+'&endDate='+dates.endDate);
        return
    
    };
    StudentDataOp.addStudent = function(stud) {
        return $http.post(urlBase + '/AddStudent', stud);
    };
    return StudentDataOp;
}]);
get_google_data.factory('StudentDataOp', ['$http', function($http) {
    //this is a google script   
    var urlBase = 'https://script.google.com/macros/s/AKfycbw4OmnSDv79Y2Xfdig_n4bS5BZOSWOpKZfWIp5uumABorA9gig/exec?';
    var StudentDataOp = {};

    StudentDataOp.get_google_data = function(google_sheet_id) {
        return $http.get(urlBase + 'id=' + google_sheet_id);
        // 
        return $http.get(urlBase + 'id=13OssmallS7QtuJbPWT7auEe2wvx768EEc7xIsIByq58');
    };
    StudentDataOp.addStudent = function(stud) {
        return $http.post(urlBase + '/AddStudent', stud);
    };
    return StudentDataOp;
}]);