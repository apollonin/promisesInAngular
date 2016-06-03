var app = angular.module('app', []);

app.controller('Ctrl', ['$scope', '$interval', function($scope, $interval){

	$scope.randomWorkProgress = 'Working';
	$scope.finished           = false;
	
	function randomWork(){
		var count = Math.floor(Math.random() * 6 + 5);

		$interval(function(){
			$scope.randomWorkProgress += '.';
		}, 500, count);
	}	

	randomWork();

}]);