var app=angular.module("testDirective",[]);

var mainCtrl=function($scope){

	$scope.hi="Hii";
	$scope.showdata=false;
	$scope.para=true;
	$scope.toggle1=function(){
		$scope.para=false;
	};
	$scope.toggle2=function(){
		$scope.para=true;
	}
};

app.controller("testDirective",mainCtrl);