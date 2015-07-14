var app=angular.module('httpRequest',[]);

var mainCtrl=function($scope,$http){

	$scope.hi="hi hi";
	$http.get("http://www.w3schools.com/website/Customers_JSON.php").success(function(response){
		$scope.names=response;
	});


};

app.controller("httpController",mainCtrl);