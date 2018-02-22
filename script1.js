function PossitsController($scope){ //Porque se usa esta funcion general?
	$scope.possits=[
			{title: "Market", content:"Yogurt, Sugar"},
			{title: "Classes", content:"Systems Web Development"},
			{title: "Homework", content:"Theory Reports"}
	];
	$scope.Save=function(){
		$scope.possits.push({title:$scope.nuevoPossit.title, content: $scope.nuevoPossit.content});
		$scope.formVisibility=false;
		console.log($scope.formVisibility);
		$scope.nuevoPossit.title = "";
		$scope.nuevoPossit.content = "";
	}//Si lo ponemos fuera da error, puesto que scope está definido en AlumnosController, por ello tiene que estar dentro de la función para poderse ejecutar

$scope.formVisibility=false;
$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)
}


$scope.delete = function (possit) {    
			if (confirm("Do you want delete this Post-it?"))
           {     
				var delposit = $scope.possits.indexOf(possit);
				$scope.possits.splice(delposit,1);   
           }            
}

}
