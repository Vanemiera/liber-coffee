'use strict';

angular.module('liber-coffee', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/test'});
}])
.controller('LoadoutCtrl', function($scope){
  $scope.perk = getRandomPerk();
  $scope.rollPerk = function() {
    $scope.perk = getRandomPerk();
  };

  $scope.primary = getRandomPrimary();
  $scope.rollPrimary = function() {
    $scope.primary = getRandomPrimary();
  };

  $scope.stratagems = [
    getRandomStratagem(0),
    getRandomStratagem(1),
    getRandomStratagem(2),
    getRandomStratagem(3)
  ];
  $scope.rollStratagem = function(index) {
    $scope.stratagems[index] = getRandomStratagem(index);
  };
  $scope.rollallStratagems = function() {
    for(var i=0; i < $scope.stratagems.length; i++) {
      $scope.stratagems[i] = getRandomStratagem(i);
    }
  };

  $scope.rollEverything = function() {
    $scope.rollPerk();
    $scope.rollPrimary();
    $scope.rollallStratagems();
  };


});
