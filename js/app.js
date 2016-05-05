'use strict';

var allPerks = [
  {
    name: "Laser Sight",
    img: "Laser_Aim_Module"
  },
  {
    name: "Auto-Injector",
    img: "MD-99_Autoinjector"
  },
  {
    name: "Cardio Accelerator",
    img: "Cardio_Accelerator"
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

var BGCOLOR_SUPPLY = "76, 116, 161";
var BGCOLOR_DEFENSIVE = "125, 159, 99";

var allStratagems = [
  {
    name: "EAT-17",
    img: "EAT-17",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "EXO-44 'Stomper' Exosuit",
    img: "EXO-44",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "FLAM-40 'Incinerator'",
    img: "FLAM-40",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "LAS-98 Laser Cannon",
    img: "LAS-98",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "LIFT-850 Jump Pack",
    img: "LIFT-850",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "A/MG-II Minigun Turret",
    img: "MG-II",
    color: BGCOLOR_DEFENSIVE
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
