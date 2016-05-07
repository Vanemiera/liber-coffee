'use strict';

var allPerks = [
  {
    name: "Laser Aim Module",
    img: "Laser_Aim_Module"
  },
  {
    name: "MD-99 AutoInjector",
    img: "MD-99"
  },
  {
    name: "Cardio Accelerator",
    img: "Cardio_Accelerator"
  },
  {
    name: "Heavy Armor",
    img: "Heavy_Armor"
  },
  {
    name: "Incendiary Grenades",
    img: "Incendiary_Grenades"
  },
  {
    name: "Stun Grenades",
    img: "Stun_Grenades"
  },
  {
    name: "Smoke Grenades",
    img: "Smoke_Grenades"
  },
  {
    name: "Stratagem Priority",
    img: "Stratagem_Priority"
  },
  {
    name: "Displacement Field",
    img: "Displacement_Field"
  },
  {
    name: "Strong Arm",
    img: "Strong_Arm"
  },
  {
    name: "P-6 'Gunslinger'",
    img: "P-6"
  },
  {
    name: "FLAM-24 'Pyro'",
    img: "FLAM-24"
  },
  {
    name: "PLAS-3 'Singe'",
    img: "PLAS-3"
  },
  {
    name: "All Terrain Boots",
    img: "All_Terrain_Boots"
  },
  {
    name: "Precision Call-In",
    img: "Precision_Call-In"
  }
];

var allPrimaries = [
  {
    name: "AR-19 'Liberator'",
    img: "AR-19"
  },
  {
    name: "AR-20L 'Justice'",
    img: "AR-20L"
  },
  {
    name: "AR-22C 'Patriot'",
    img: "AR-22C"
  },
  {
    name: "SG-225 'Breaker'",
    img: "SG-225"
  },
  {
    name: "SG-8 'Punisher'",
    img: "SG-8"
  },
  {
    name: "DBS-2 'Double Freedom'",
    img: "DBS-2"
  },
  {
    name: "SMG-45 'Defender'",
    img: "SMG-45"
  },
  {
    name: "MP-98 'Knight'",
    img: "MP-98"
  },
  {
    name: "RX-1 Rail Gun",
    img: "RX-1"
  },
  {
    name: "LAS-5 'Scythe'",
    img: "LAS-5"
  },
  {
    name: "LAS-13 'Trident'",
    img: "LAS-13"
  },
  {
    name: "AC-3 Arc Thrower",
    img: "AC-3"
  },
  {
    name: "MG-105 'Stalwart'",
    img: "MG-105"
  },
  {
    name: "SMG-34 'Ninja'",
    img: "SMG-34"
  },
  {
    name: "LHO-63 'Camper'",
    img: "LHO-63"
  },
  {
    name: "AR-14D 'Paragon'",
    img: "AR-14D"
  },
  {
    name: "CR-9 'Supressor'",
    img: "CR-9"
  },
  {
    name: "PLAS-1 'Scorcher'",
    img: "PLAS-1"
  },
  {
    name: "LAS-16 'Sickle'",
    img: "LAS-16"
  },
  {
    name: "LAS-12 'Tanto'",
    img: "LAS-12"
  },
  {
    name: "AC-5 Arc Shotgun",
    img: "AC-5"
  }
];

var BGCOLOR_SUPPLY = "76, 116, 161";
var BGCOLOR_DEFENSIVE = "125, 159, 99";

var allStratagems = [
  {
    name: "Resupply",
    img: "Resupply",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "MG-94 Machine Gun",
    img: "MG-94",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "LAS-98 Laser Cannon",
    img: "LAS-98",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "AC-22 'Dum-Dum'",
    img: "AC-22",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "'Obliterator' Grenade Launcher",
    img: "Obliterator",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "M-25 'Rumbler'",
    img: "M-25",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "FLAM-40 'Incinerator'",
    img: "FLAM-40",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "TOX-13 'Avenger'",
    img: "TOX-13",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "RL-112 Recoilless Rifle",
    img: "RL-112",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "EAT-17",
    img: "EAT-17",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "MLS-4X 'Commando'",
    img: "MLS-4X",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "EXO-44 'Stomper' Exosuit",
    img: "EXO-44",
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
  };


});
