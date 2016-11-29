var app = angular.module('myApp', []);


app.controller('HelloWorldController', function( $scope ){
  $scope.message = 'Hello world from angular controller' ; 
});