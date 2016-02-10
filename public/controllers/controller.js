var myApp = angular.module('myApp', []);

myApp.controller('appController1', ['$scope', '$http', function($scope, $http) {

	console.log("Hello World from controller");

	function refresh(){

		$http.get('/contactlist').success(function(response){

    		console.log("Data recived");

    		$scope.contactList = response;

    	});

    };

    refresh();

	$scope.addContact = function(){

		console.log($scope.contact);

		$http.post('/contactlist', $scope.contact).success(function(response){

			console.log(response);

			refresh();

		});

	};

	$scope.remove = function(id){

		console.log(id);

		$http.delete('/contactlist/' + id).success(function(response){

			console.log(response);

			refresh();

		});

	};

	
	//$scope.contactList = contactList;

}]);