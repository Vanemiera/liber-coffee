angular.module('hash64',[])
.factory('hash64', function() {
  var hash64 = {};

  hash64.BASE64 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";

  hash64.intsToB64Url = function(ints) {
    var res = '';
    for(var i=0;i<ints.length;i++){
      res += this.BASE64.charAt(ints[i]);
    }
    return res;
  };

  hash64.b64UrlToInts = function(b64) {
    var res = [];
    for(var i=0;i<b64.length;i++){
      res[i] = this.BASE64.indexOf(b64[i]);
    }
    return res;
  };

  var parseHash = function(hash) {
    if (hash.match(/^(#\/)?([\w-]{6},?){1}$/g)) {
      return hash.match(/[\w-]{6}/g);
    } else {
      return;
    }
  };

  hash64.hashes = parseHash(document.location.hash);

  return hash64;
});
