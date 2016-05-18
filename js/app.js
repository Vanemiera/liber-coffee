'use strict';

var ints2Hex = function(bitCount, ints) {
  var mask = Math.pow(2, bitCount) - 1;
  var total = 0;
  for (var i = 0; i<ints.length; i++) {
    total += (ints[i] & mask) << i*bitCount;
  }
  var hex = total.toString(16);
  while (hex.length*4 < ints.length*bitCount) {
    hex = "0" + hex;
  }
  return hex;
};

var hex2Ints = function(bitCount, hex) {
  var mask = Math.pow(2, bitCount) - 1;
  var total = parseInt("0x" + hex);
  var count = Math.floor(hex.length*4/bitCount);
  var ints = [];
  for (var i = 0; i<count; i++) {
    ints[i] = ((mask << i*bitCount) & total) >> i*bitCount;
  }
  return ints;
};

var isValidHash = function(hash) {
  return hash.match(/^(#\/)?([0-9a-f]{8,9},?){1,4}$/g);
};

angular.module('liber-coffee', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/test'});
}])
.controller('LoadoutCtrl', function($scope, $routeParams, $location){
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

  $scope.url = $location.url();
});
