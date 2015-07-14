var app=angular.module("formAjs",[]);

var mainCtrl=function($scope){

	$scope.reset=function(){
		$scope.fName="";
		$scope.lName="";
		$scope.passw1="";

		$scope.users=[{id:1,fName:"Amali",lName:"kanchana"},
					  {id:2,fName:"Madhavi",lName:"Pitigala"},
					  {id:3,fName:"Rumesha",lName:"Yohani"},
					  {id:4,fName:"Hasangi",lName:"Gunawardhana"}
		] ;

		$scope.edit=true;
		$scope.error=false;
		$scope.incomplete=false;

		$scope.editUser=function(id){

			if(id=='new'){
				$scope.edit=true;
				$scope.incomplete=true;
				$scope.fName="";
				$scope.lName="";

			}else{
				$scope.edit=false;
				$scope.fName=$scope.users[id-1].fName;
				$scope.lName=$scope.users[id-1].lName;

			}
		};


	}
};

app.controller("formCtrl",mainCtrl);