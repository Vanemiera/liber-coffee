'use strict';

var allPerks = [
  {
    name: "Laser Sight",
    img: "Laser_Aim_Module"
  },
  {
    name: "Auto-Injector",
    img: "MD-99_Autoinjector"
  }
];

var allPrimaries = [
  {
    name: "Justice",
    img: "AR-19"
  },
  {
    name: "Patriot",
    img: "AR-22C"
  }
];

var allStratagems = [
  {
    name: "A/MG-II Minigun Turret",
    img: "MG-II",
    color: "125, 159, 99"
  },
  {
    name: "EAT-17",
    img: "EAT-17",
    color: "76, 116, 161"
  }
];

var getRandomPerk = function() {
  return allPerks[Math.floor(Math.random()*allPerks.length)];
};

var getRandomPrimary = function() {
  return allPrimaries[Math.floor(Math.random()*allPrimaries.length)];
};

var getRandomStratagem = function(slot) {
  var rndStrat = allStratagems[Math.floor(Math.random()*allStratagems.length)];
  var newStrat = {slot:slot, name:rndStrat.name, img:rndStrat.img, color:rndStrat.color};
  return newStrat;
};

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
  }


});
