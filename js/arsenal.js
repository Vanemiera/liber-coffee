var testarsenal = {};

angular.module('arsenal', ['hash64'])
.factory('arsenal', function(hash64) {
  var arsenal = {};
  arsenal.hash = hash64;
  arsenal.perks = [
    {//a
      name: "Laser Aim Module",
      img: "Laser_Aim_Module",
      weights: {
        hell: 0.5
      }
    },
    {//b
      name: "MD-99 AutoInjector",
      img: "MD-99",
      weights: {
        hell: 0.5
      }
    },
    {//c
      name: "Cardio Accelerator",
      img: "Cardio_Accelerator"
    },
    {//d
      name: "Heavy Armor",
      img: "Heavy_Armor"
    },
    {//e
      name: "Incendiary Grenades",
      img: "Incendiary_Grenades",
      weights: {
        hell: 3
      }
    },
    {//f
      name: "Stun Grenades",
      img: "Stun_Grenades",
      weights: {
        hell: 3
      }
    },
    {//g
      name: "Smoke Grenades",
      img: "Smoke_Grenades",
      weights: {
        hell: 3
      }
    },
    {//h
      name: "Stratagem Priority",
      img: "Stratagem_Priority",
      weights: {
        nice: 5,
        hell: 0.5
      }
    },
    {//i
      name: "Displacement Field",
      img: "Displacement_Field",
      weights: {
        nice: 5,
        hell: 0.5
      }
    },
    {//j
      name: "Strong Arm",
      img: "Strong_Arm",
      weights: {
        hell: 2
      }
    },
    {//k
      name: "P-6 'Gunslinger'",
      img: "P-6",
      weights: {
        hell: 3
      }
    },
    {//l
      name: "FLAM-24 'Pyro'",
      img: "FLAM-24",
      weights: {
        hell: 3
      }
    },
    {//m
      name: "PLAS-3 'Singe'",
      img: "PLAS-3",
      weights: {
        hell: 3
      }
    },
    {//n
      name: "All Terrain Boots",
      img: "All_Terrain_Boots"
    },
    {//o
      name: "Precision Call-In",
      img: "Precision_Call-In"
    }
  ];

  arsenal.primaries = [
    {//a
      name: "AR-19 'Liberator'",
      img: "AR-19"
    },
    {//b
      name: "AR-20L 'Justice'",
      img: "AR-20L",
      weights: {
        nice: 5
      }
    },
    {//c
      name: "AR-22C 'Patriot'",
      img: "AR-22C"
    },
    {//d
      name: "SG-225 'Breaker'",
      img: "SG-225",
      weights: {
        nice: 5
      }
    },
    {//e
      name: "SG-8 'Punisher'",
      img: "SG-8",
      weights: {
        nice: 0.5,
        hell: 8
      }
    },
    {//f
      name: "DBS-2 'Double Freedom'",
      img: "DBS-2",
      weights: {
        nice: 5
      }
    },
    {//g
      name: "SMG-45 'Defender'",
      img: "SMG-45"
    },
    {//h
      name: "MP-98 'Knight'",
      img: "MP-98"
    },
    {//i
      name: "RX-1 Rail Gun",
      img: "RX-1",
      weights: {
        nice: 0.5
      }
    },
    {//j
      name: "LAS-5 'Scythe'",
      img: "LAS-5"
    },
    {//k
      name: "LAS-13 'Trident'",
      img: "LAS-13",
      weights: {
        nice: 5
      }
    },
    {//l
      name: "AC-3 Arc Thrower",
      img: "AC-3",
      weights: {
        nice: 0.5,
        hell: 5
      }
    },
    {//m
      name: "MG-105 'Stalwart'",
      img: "MG-105"
    },
    {//n
      name: "SMG-34 'Ninja'",
      img: "SMG-34"
    },
    {//o
      name: "LHO-63 'Camper'",
      img: "LHO-63",
      weights: {
        nice: 0.5
      }
    },
    {//p
      name: "AR-14D 'Paragon'",
      img: "AR-14D"
    },
    {//q
      name: "CR-9 'Supressor'",
      img: "CR-9"
    },
    {//r
      name: "PLAS-1 'Scorcher'",
      img: "PLAS-1"
    },
    {//s
      name: "LAS-16 'Sickle'",
      img: "LAS-16",
      weights: {
        nice: 5
      }
    },
    {//t
      name: "LAS-12 'Tanto'",
      img: "LAS-12"
    },
    {//u
      name: "AC-5 Arc Shotgun",
      img: "AC-5",
      weights: {
        nice: 0.5,
        hell: 4
      }
    },
    {//v
      name: "M2016 'Constitution'",
      img: "M2016",
      weights: {
        nice: 0.5,
        hell: 4
      }
    }
  ];

  arsenal.BGCOLOR_SUPPLY = "76, 116, 161";
  arsenal.BGCOLOR_DEFENSIVE = "125, 159, 99";
  arsenal.BGCOLOR_OFFENSIVE = "139, 91, 81";

  arsenal.stratagems = [
    {//a
      name: "Resupply",
      img: "Resupply",
      color: arsenal.BGCOLOR_SUPPLY,
      weights: {
        nice: 10
      }
    },
    {//b
      name: "MG-94 Machine Gun",
      img: "MG-94",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//c
      name: "LAS-98 Laser Cannon",
      img: "LAS-98",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//d
      name: "AC-22 'Dum-Dum'",
      img: "AC-22",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//e
      name: "'Obliterator' Grenade Launcher",
      img: "Obliterator",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//f
      name: "M-25 'Rumbler'",
      img: "M-25",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//g
      name: "FLAM-40 'Incinerator'",
      img: "FLAM-40",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//h
      name: "TOX-13 'Avenger'",
      img: "TOX-13",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//i
      name: "RL-112 Recoilless Rifle",
      img: "RL-112",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//j
      name: "EAT-17",
      img: "EAT-17",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//k
      name: "MLS-4X 'Commando'",
      img: "MLS-4X",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//l
      name: "AD-334 'Guard Dog'",
      img: "AD-334",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//m
      name: "AD-289 'Angel'",
      img: "AD-289",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//n
      name: "Resupply Pack",
      img: "Resupply_Pack",
      color: arsenal.BGCOLOR_SUPPLY,
      weights: {
        nice: 5
      }
    },
    {//o
      name: "LIFT-850 Jump Pack",
      img: "LIFT-850",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//p
      name: "SH-32 Directional Kinetic Shield",
      img: "SH-32",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//q
      name: "SH-20 Shield Generator Pack",
      img: "SH-20",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//r
      name: "REP-80",
      img: "REP-80",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//s
      name: "REC-6 'Demolisher'",
      img: "REC-6",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//t
      name: "EXO-44 'Stomper' Exosuit",
      img: "EXO-44",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//u
      name: "EXO-48 'Obsidian' Exosuit",
      img: "EXO-48",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//v
      name: "EXO-51 'Lumberer' Exosuit",
      img: "EXO-51",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//w
      name: "MC-109 'Hammer' Motorcycle",
      img: "MC-109",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//x
      name: "TD-110 'Bastion'",
      img: "TD-110",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//y
      name: "M5 APC",
      img: "M5",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//z
      name: "M5-32 HAV",
      img: "M5-32",
      color: arsenal.BGCOLOR_SUPPLY
    },
    {//A
      name: "'Humblebee' UAV drone",
      img: "UAV",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//B
      name: "Distractor Beacon",
      img: "Distractor_Beacon",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//C
      name: "AT-47 Anti-Tank Emplacement",
      img: "AT-47",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//D
      name: "A/MG-II Minigun Turret",
      img: "MG-II",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//E
      name: "A/RX-34 Railcannon Turret",
      img: "RX-34",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//F
      name: "A/AC-6 Tesla Tower",
      img: "AC-6",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//G
      name: "Airdropped Mines",
      img: "Airdropped_Mines",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//H
      name: "Anti-Personnel Barrier",
      img: "Anti-Personnel_Barrier",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//I
      name: "Airdropped Stun Mines",
      img: "Airdropped_Stun_Mines",
      color: arsenal.BGCOLOR_DEFENSIVE
    },
    {//J
      name: "Static Field Conductors",
      img: "Static_Field_Conductors",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    },
    {//K
      name: "Airstrike",
      img: "Airstrike",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 2
      }
    },
    {//L
      name: "'Vindicator' Dive Bomb",
      img: "Vindicator",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    },
    {//M
      name: "Strafing Run",
      img: "Strafing_Run",
      color: arsenal.BGCOLOR_OFFENSIVE
    },
    {//N
      name: "Close Air Support",
      img: "Close_Air_Support",
      color: arsenal.BGCOLOR_OFFENSIVE
    },
    {//O
      name: "Incendiary Bombs",
      img: "Incendiary_Bombs",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 3
      }
    },
    {//P
      name: "Missile Barrage",
      img: "Missile_Barrage",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//Q
      name: "Thunderer Barrage",
      img: "Thunderer_Barrage",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//R
      name: "Orbital Laser Strike",
      img: "Orbital_Laser_Strike",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//S
      name: "'Shredder' Missile Strike",
      img: "Shredder",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 0.5
      }
    },
    {//T
      name: "Railcannon Strike",
      img: "Railcannon_Strike",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    },
    {//U
      name: "'Sledge' Precision Artillery",
      img: "Sledge_Precision_Artillery",
      color: arsenal.BGCOLOR_OFFENSIVE,
      weights: {
        nice: 5
      }
    }
  ];

  arsenal.loadouts = {
    favourites: [
      {
        name: "Bug and Borg basher",
        author: "Vanemiera",
        description: "My go-to loadout for Bugs and Cyborgs.",
        hash: "icnfJJ",
        id: "vanf1"
      },
      {
        name: "Squid basher",
        author: "Vanemiera",
        description: "My go-to loadout for Illuminates.",
        hash: "ifaeoO",
        id: "vanf2"
      },
      {
        name: "Throw n' blow",
        author: "Vanemiera",
        description: "Fun with explosives.",
        hash: "jtssLL",
        id: "vanf3"
      },
      {
        name: "Stun & Run",
        author: "wilier",
        description: "A humane approach to spreading democracy",
        hash: "fglaIL",
        id: "redw1"
      },
      {
        name: "Pyro Maniacs",
        author: "wilier",
        description: "Fire, fire and more fire!!! A burning desire to spread democracy",
        hash: "efgOau",
        id: "redw2"
      },
      {
        name: "Shock & Awe",
        author: "wilier",
        description: "Arc weapons and a lot of electricity!",
        hash: "iupJFF",
        id: "redw3"
      },
      {
        name: "Toxic Pest Control",
        author: "wilier",
        description: "Chemical warfare!",
        hash: "ipPhfa",
        id: "redw4"
      },///////////////////////
      {
        name: "Smoke on the Slaughter",
        author: "TheLethalDiva",
        description: "For those that don't know a smoke grenade gives you just"+
                     " enough time for a safe reload of your prone reload"+
                     " weapon, in this case the commando. Plus you can use"+
                     " smokes to keep tanks out of the fight, escape much like"+
                     " throwing a static field behind you, to complete"+
                     " objectives, and relax in safety while your next ammo"+
                     " drop is coming down. Ammo drops can also be dropped on"+
                     " tanks if need be. So many uses for smoke grenades so"+
                     " this loadout focuses on throwing as many as possible"+
                     " while going nuts with commando....which is ideal for"+
                     " using with smoke grenades, since you don't really need"+
                     " to see or even have a clear line of fire to be able to"+
                     " see to hit the enemies. So many uses for smoke grenades"+
                     " and so this loadout focuses on taking advantage of"+
                     " that, while going trigger happy with Paragon and Commando.",
        hash: "gpkaaa",
        id: "Diva1"
      },
      {
        name: "Muzzle Tov Machine Gun Fun No Refund Loadout",
        author: "TheLethalDiva",
        description: "Works for me....\n\n"+
                     "Running Stalwart with the Machine gun secondary might"+
                     " seem redundant, but that allows you the ability to"+
                     " switch weapons without having to reload during long"+
                     " skirmishes and control the enemy from across the screen."+
                     " Eats give you plenty of anti-tank at each stop and also"+
                     " the ability to pass the machine gun back and forth to"+
                     " other team members if neccesary.",
        hash: "bmapbj",
        id: "Diva2"
      },
      {
        name: "Firefly",
        author: "TheLethalDiva",
        description: "Stun and Burn is the gateway to Serenity.",
        hash: "bialgK",
        id: "Diva3"
      },
      {
        name: "Hidden Hokugage",
        author: "TheLethalDiva",
        description: "Ninja is one of the coolest primaries in the game and"+
                     " the sledge complements it well. Its all about mobility,"+
                     " which the Ninja (like all the SMGs) excels at. Believe It!",
        hash: "hnaUUU",
        id: "Diva4"
      },
      {
        name: "Punisher War Journal",
        author: "TheLethalDiva",
        description: "Angel really complements Heavy Armor. Flamethrower"+
                     " complements the Punisher as you can sweep the field"+
                     " with flames and then pick off enemies with sniper"+
                     " shots. Strafing Run is here because its an Illuminate"+
                     " loadout, but even against bugs and cyborgs, strafing"+
                     " run really comes in handy for handling Brood Commanders"+
                     " and Butcher Packs.",
        hash: "deamgM",
        id: "Diva5"
      },
      {
        name: "The Gandhi Way",
        author: "Pelia",
        description: "Greetings from Super Earth! Our Managed"+
                     " Democracy is backed... with NUCLEAR WEAPONS!!!",
        hash: "hkSSSS",
        id: "nuke4"
      },
      {
        name: "Guns, Guns, Guns!",
        author: "Pelia",
        description: "Bring the rain. Ride the lightning. Hear the thunder.",
        hash: "hmaQTM",
        id: "21gun"
      },
      {
        name: "The Independence",
        author: "Pelia",
        description: "Let us make the galaxy independent of its sovereignty and parade all over it.",
        hash: "hvMKMK",
        id: "4july"
      },
      {
        name: "Go Loud",
        author: "Pelia",
        description: "Simon Viklund's soundtrack is not included, but we do have some super-modern tools of"+
                     " eardrum destruction for you, and some suits of armour to look badass using them."+
                     " We also got this awkward situation where we only got lots of bags for ammo, but no ammo."+
                     " We only managed to scrape up enough to fill you one or two.",
        hash: "dodKQn",
        id: "noise"
      },
      {
        name: "Helldozer",
        author: "Pelia",
        description: "There was once a law enforcement officer outfitted with such raw strength and firepower"+
                     " it matched heavy machinery. This concept has been now modernized and reintroduced,"+
                     " marking the coming of Helldozers. Steamrolling over the undemocratic species of the Milky Way,"+
                     " Helldozers are the true powerhouse of Liberty and Freedom.",
        hash: "debqaj",
        id: "Okill"
      },
      {
        name: "When Engineer Is The Turret",
        author: "Pelia",
        description: "Now here boons, what the burps, the seal will hurt,"+
                     " say and rat my fur, and hurt the meme... Get sparks,"+
                     " send a gamawah! Snurf snurf. It's all about the pose, God.",
        hash: "oerCxa",
        id: "bcwrd"
      },
    ],
    punishments: [
      {
        name: "Element of Supplies",
        author: "Vanemiera",
        description: "Presents! :3",
        hash: "hiaaaa",
        id: "vanp1"
      },
      {
        name: "Be Quiet",
        author: "Pelia",
        description: "Shhhhh. It's okay. You can do it.",
        hash: "anaaBI",
        id: "shhhh"
      },
      {
        name: "Sons of Managed Democracy",
        author: "Pelia",
        description: "Y'all thought biker gangs gon' die out on Supr' Earth? Heeeell no!",
        hash: "jfrwwa",
        id: "biker"
      },
      {
        name: "Back To The Past",
        author: "Pelia",
        description: "I'm sorry sir, our armoury is empty and we only got this stuff from couple centuries back."+
                     " You get this M1903 Springfield rifle, all the hand nades we've got are the training smokes,"+
                     " but at least we found crates on crates of AT4s. Oh and, uh, we found this A10-C in the back"+
                     " of the ship's hangar. We'll drop it into the atmosphere and hope it doesn't burn down."+
                     " Good news though; we got enough vintage cartridges to last you the whole war.",
        hash: "gvaLMj",
        id: "pasta"
      },
      {
        name: "Ambient light",
        author: "Vanemiera",
        description: "Fix: Screen too dark",
        hash: "hlSSSS",
        id: "vanp2"
      },
    ]
  };

  arsenal.weightingSumsPerks = {};
  arsenal.weightingSumsPrimaries = {};
  arsenal.weightingSumsStratagems = {};

  var calcweightingSums = function(weightingSumsList, itemList) {
    for (var i=0; i<itemList.length; i++) {
      var currentItem = itemList[i];
      //add item weight to respective total
      for(var k in weightingSumsList) {
        if (currentItem.weights && currentItem.weights[k]) {
          weightingSumsList[k] += currentItem.weights[k];
        } else {
          weightingSumsList[k] += 1;
        }
      }
      //add weighting to list of first encountered
      if(!currentItem.weights) {continue;}
      for(var k in currentItem.weights) {
        if (!weightingSumsList[k]) {
          weightingSumsList[k] =  i + currentItem.weights[k];
        }
      }
    }
  };

  calcweightingSums(arsenal.weightingSumsPerks, arsenal.perks);
  calcweightingSums(arsenal.weightingSumsPrimaries, arsenal.primaries);
  calcweightingSums(arsenal.weightingSumsStratagems, arsenal.stratagems);

  var getRandomWeighted = function(weighting, weightingSumsList, itemList) {
    var result = {};
    if (weightingSumsList[weighting]) {
      var targetWeight = Math.random()*weightingSumsList[weighting];
      var iteratedWeight = 0;
      for (var i=0; i<itemList.length; i++) {
        var currentWeight = (itemList[i].weights && itemList[i].weights[weighting]) || 1;
        if (targetWeight<=iteratedWeight+currentWeight) {
          result.id = i;
          result.item = itemList[i];
          return result;
        } else {
          iteratedWeight += currentWeight;
        }
      }
    } else {
      result.id = Math.floor(Math.random()*itemList.length);
      result.item = itemList[result.id];
    }
    return result;
  };

  arsenal.getRandomPerk = function(weighting) {
    var rndPerk = getRandomWeighted(weighting, arsenal.weightingSumsPerks, arsenal.perks);
    var newPerk = {name:rndPerk.item.name, img:rndPerk.item.img, id:rndPerk.id};
    return newPerk;
  };

  arsenal.getPerk = function(id) {
    var rndPerk = this.perks[id];
    if (rndPerk) {
      var newPerk = {name:rndPerk.name, img:rndPerk.img, id:id};
      return newPerk;
    } else {
      return this.getRandomPerk();
    }
  };

  arsenal.getRandomPrimary = function(weighting) {
    var rndPrimary = getRandomWeighted(weighting, arsenal.weightingSumsPrimaries, arsenal.primaries);
    var newPrimary = {name:rndPrimary.item.name, img:rndPrimary.item.img, id:rndPrimary.id};
    return newPrimary;
  };

  arsenal.getPrimary = function(id) {
    var rndPrimary = this.primaries[id];
    if (rndPrimary) {
      var newPrimary = {name:rndPrimary.name, img:rndPrimary.img, id:id};
      return newPrimary;
    } else {
      return this.getRandomPrimary();
    }
  };

  arsenal.getRandomStratagem = function(slot, weighting) {
    var rndStrat = getRandomWeighted(weighting, arsenal.weightingSumsStratagems, arsenal.stratagems);
    var newStrat = {slot:slot, name:rndStrat.item.name, img:rndStrat.item.img, color:rndStrat.item.color, id:rndStrat.id};
    return newStrat;
  };

  arsenal.getStratagem = function(id, slot) {
    var rndStrat =  this.stratagems[id];
    if (rndStrat) {
      var newStrat = {slot:slot, name:rndStrat.name, img:rndStrat.img, color:rndStrat.color, id:id};
      return newStrat;
    } else {
      return this.getRandomStratagem(slot);
    }
  };

  arsenal.getLoadout = function(hash) {
    var newLoadout = {stratagems: []};
    if (hash[0] == '~') {
      for (var k in this.loadouts) {
        for (var i=0; i<this.loadouts[k].length; i++) {
          if (this.loadouts[k][i].id === hash.substring(1)) {
            newLoadout = this.getLoadout(this.loadouts[k][i].hash);
            newLoadout.id = this.loadouts[k][i].id;
            return newLoadout;
          }
        }
      }
    } else {
      var ids = this.hash.b64UrlToInts(hash);
      newLoadout.perk = arsenal.getPerk(ids[0]);
      newLoadout.primary = arsenal.getPrimary(ids[1]);
      newLoadout.stratagems = [
        arsenal.getStratagem(ids[2], 0),
        arsenal.getStratagem(ids[3], 1),
        arsenal.getStratagem(ids[4], 2),
        arsenal.getStratagem(ids[5], 3)
      ];
    }
    return newLoadout;
  };

  arsenal.getRandomLoadout = function(pool) {
    var id = Math.floor(Math.random()* this.loadouts[pool].length);
    var rndLoadout = this.getLoadout(this.loadouts[pool][id].hash);
    rndLoadout.id = this.loadouts[pool][id].id;
    return rndLoadout;
  };

  testarsenal = arsenal;
  return arsenal;
});
