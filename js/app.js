'use strict';

var BASE64 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_"

var intsToB64Url = function(ints) {
  var res = '';
  for(var i=0;i<ints.length;i++){
    res += BASE64.charAt(ints[i])
  }
  return res
};

var b64UrlToInts = function(b64) {
  var res = [];
  for(var i=0;i<b64.length;i++){
    res[i] = BASE64.indexOf(b64[i])
  }
  return res
};

var parseHash = function(hash) {
  if (hash.match(/^(#\/)?([\w-]{6},?){1}$/g)) {
    return hash.match(/[\w-]{6}/g);
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
    $scope.hash = '#/' + intsToB64Url([
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
    var ids = b64UrlToInts(hashes[0]);
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
