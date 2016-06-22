var app = angular.module('app', []);

app.controller('Ctrl', ['$scope', '$interval', '$q', function($scope, $interval, $q){

	$scope.randomWorkProgress = 'Working';
	$scope.finished           = false;

	function randomWork(){
		var deferred = $q.defer(),
			promise = deferred.promise,
			count = Math.floor(Math.random() * 6 + 5);

		promise = $interval(function(){
			$scope.randomWorkProgress += '.';
		}, 500, count);

		return promise;
	}

	var promise = randomWork();
	promise.then(function() {
		$scope.finished = true;
	});

}]);