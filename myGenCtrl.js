app.controller("myGenCtrl", function($scope) {
    $scope.name = "";
	$scope.lastname = "";
	$scope.country = "";
    $scope.left  = function() {return 100 - $scope.name.length;
	                          $scope.lastname.length;
	                          $scope.country.length;};
    $scope.clear = function() {$scope.name = "";
	                          $scope.lastname = "";
	                          $scope.country = "";};
    $scope.save  = function() {alert("Your information was saved.");};
});
