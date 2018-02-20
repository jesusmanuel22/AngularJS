function AlumnosController($scope){
	$scope.alumnos=[
			{nombre: "Jose Antonio", telefono:"123456789", curso: "1º carrera"},
			{nombre: "Jose ", telefono:"1203456789", curso: "2º carrera"},
			{nombre: "Antonio", telefono:"1234506789", curso: "3º carrera"}
	];
	$scope.Save=function(){
	$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono: $scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});
}//Si lo ponemos fuera da error, puesto que scope está definido en AlumnosController, por ello tiene que estar dentro de la función para poderse ejecutar

}
