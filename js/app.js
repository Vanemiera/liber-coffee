'use strict';

var ints2Hex = function(bitCount, ints) {
  var mask = Math.pow(2, bitCount) - 1;
  var total = 0;
  for (var i = 0; i<ints.length; i++) {
    var addi =((ints[i] & mask) << i*bitCount) >>> 0;
    total += addi;
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

var parseHash = function(hash) {
  if (hash.match(/^(#\/)?([0-9a-f]{8,9},?){1,4}$/g)) {
    return hash.match(/[0-9a-f]{8,9}/g);
  } else {
    return;
  }
};

var hashes = parseHash(document.location.hash);

angular.module('liber-coffee', [])
.config(function() {
  var hashes = parseHash(document.location.hash);
})
.controller('LoadoutCtrl', function($scope, $location){

  var calcHash = function() {
    $scope.hash = '#/' + ints2Hex(6, [
      $scope.perk.id,
      $scope.primary.id,
      $scope.stratagems[0].id,
      $scope.stratagems[1].id,
      $scope.stratagems[2].id,
      $scope.stratagems[3].id
    ]);
    $scope.url = location.host + location.pathname + $scope.hash;
  };

  if (hashes) {
    var ids = hex2Ints(6, hashes[0]);
    $scope.perk = getPerk(ids[0]);
    $scope.primary = getPrimary(ids[1]);
    $scope.stratagems = [
      getStratagem(ids[2], 0),
      getStratagem(ids[3], 1),
      getStratagem(ids[4], 2),
      getStratagem(ids[5], 3)
    ];
    $scope.url = location.host + location.pathname + location.hash;
  } else {
    $scope.perk = getRandomPerk();
    $scope.primary = getRandomPrimary();
    $scope.stratagems = [
      getRandomStratagem(0),
      getRandomStratagem(1),
      getRandomStratagem(2),
      getRandomStratagem(3)
    ];
    calcHash();
  }

    $scope.rollPerk = function() {
      $scope.perk = getRandomPerk();
      calcHash();
    };

    $scope.rollPrimary = function() {
      $scope.primary = getRandomPrimary();
      calcHash();
    };

  $scope.rollStratagem = function(index) {
    $scope.stratagems[index] = getRandomStratagem(index);
    calcHash();
  };
  $scope.rollallStratagems = function() {
    for(var i=0; i < $scope.stratagems.length; i++) {
      $scope.stratagems[i] = getRandomStratagem(i);
    }
    calcHash();
  };

  $scope.rollEverything = function() {
    $scope.rollPerk();
    $scope.rollPrimary();
    $scope.rollallStratagems();
  };
});
