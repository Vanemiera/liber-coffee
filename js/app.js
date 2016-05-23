'use strict';

angular.module('liber-coffee', ['arsenal', 'hash64'])
.controller('LoadoutCtrl', function($scope, $location, arsenal, hash64){

  $scope.calcHash = function() {
    $scope.hash = '#/' + hash64.intsToB64Url([
      $scope.perk.id,
      $scope.primary.id,
      $scope.stratagems[0].id,
      $scope.stratagems[1].id,
      $scope.stratagems[2].id,
      $scope.stratagems[3].id
    ]);
    $scope.url = location.host + location.pathname + $scope.hash;
  };

  if (hash64.hashes) {
    var ids = hash64.b64UrlToInts(hash64.hashes[0]);
    $scope.perk = arsenal.getPerk(ids[0]);
    $scope.primary = arsenal.getPrimary(ids[1]);
    $scope.stratagems = [
      arsenal.getStratagem(ids[2], 0),
      arsenal.getStratagem(ids[3], 1),
      arsenal.getStratagem(ids[4], 2),
      arsenal.getStratagem(ids[5], 3)
    ];
    $scope.url = location.host + location.pathname + location.hash;
  } else {
    $scope.perk = arsenal.getRandomPerk();
    $scope.primary = arsenal.getRandomPrimary();
    $scope.stratagems = [
      arsenal.getRandomStratagem(0),
      arsenal.getRandomStratagem(1),
      arsenal.getRandomStratagem(2),
      arsenal.getRandomStratagem(3)
    ];
    $scope.calcHash();
  }

  $scope.diceoptions = [
    {
      id: 1,
      label: "Nice dice - Favourable weighting",
    },
    {
      id: 2,
      label: "Normal dice - Unweighted",
    },
    {
      id: 3,
      label: "Helldice - Punishing weighting",
    },
    {
      id: 4,
      label: "Community favourites",
    },
    {
      id: 5,
      label: "Community punishments",
    }
  ];
  $scope.dicemode = $scope.diceoptions[0]

  $scope.rollPerk = function() {
    $scope.perk = arsenal.getRandomPerk();
    $scope.calcHash();
  };

  $scope.rollPrimary = function() {
    $scope.primary = arsenal.getRandomPrimary();
    $scope.calcHash();
  };

  $scope.rollStratagem = function(index) {
    $scope.stratagems[index] = arsenal.getRandomStratagem(index);
    $scope.calcHash();
  };
  $scope.rollallStratagems = function() {
    for(var i=0; i < $scope.stratagems.length; i++) {
      $scope.stratagems[i] = arsenal.getRandomStratagem(i);
    }
    $scope.calcHash();
  };

  $scope.rollEverything = function() {
    $scope.rollPerk();
    $scope.rollPrimary();
    $scope.rollallStratagems();
  };
});
