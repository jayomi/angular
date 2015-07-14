var app=angular.module('helloApp',[]);


var controller=function($scope){

	$scope.welcome="hellojs";
	$scope.name="name";
	$scope.names=[{name: 'Jayomi',country: 'SL'},
					{name: 'Amali',country: 'India' },
					{name: "Kanchana",country: 'Australia'}
	];

	$scope.printInfo=function(){
			return $scope.fname + " "+$scope.age+" "+$scope.bday+" "+$scope.salary+" "+$scope.test;
	};
};

app.controller("helloCtrl",controller);