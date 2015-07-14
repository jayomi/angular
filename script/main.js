var app=angular.module("helloApp",[]);

app.controller('helloController',function($scope){

	$scope.projects=["GTO","ERAA","Speed","SI","Akura","VTF","NewyorkLife"];


	/*removing the project form the projects list*/
	
	$scope.done=function(project){

		var indexOf=$scope.projects.indexOf(project);
		
		if (indexOf!=-1) {

			$scope.projects.splice(indexOf,1);
		};
	}

 


});