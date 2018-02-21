function PossitsController($scope){
	$scope.possits=[
			{titulo: "Compra #1", contenido:"Yogurt, Sugar"},
			{titulo: "Clase #2 ", contenido:"Systems Web Development"},
			{titulo: "Tarea", contenido:"1234506789"}
	];
	$scope.Save=function(){
	$scope.possits.push({titulo:$scope.nuevoPossit.titulo, contenido: $scope.nuevoPossit.contenido});
	$scope.formVisibility=false;
	console.log($scope.formVisibility)
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
