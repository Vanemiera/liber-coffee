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
var BGCOLOR_OFFENSIVE = "139, 91, 81";

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
    name: "AD-334 'Guard Dog'",
    img: "AD-334",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "AD-289 'Angel'",
    img: "AD-289",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "Resupply Pack",
    img: "Resupply_Pack",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "LIFT-850 Jump Pack",
    img: "LIFT-850",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "SH-32 Directional Kinetic Shield",
    img: "SH-32",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "SH-20 Shield Generator Pack",
    img: "SH-20",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "REP-80",
    img: "REP-80",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "REC-6 'Demolisher'",
    img: "REC-6",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "EXO-44 'Stomper' Exosuit",
    img: "EXO-44",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "EXO-48 'Obsidian' Exosuit",
    img: "EXO-48",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "EXO-51 'Lumberer' Exosuit",
    img: "EXO-51",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "MC-109 'Hammer' Motorcycle",
    img: "MC-109",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "TD-110 'Bastion'",
    img: "TD-110",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "M5 APC",
    img: "M5",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "M5-32 HAV",
    img: "M5-32",
    color: BGCOLOR_SUPPLY
  },
  {
    name: "'Humblebee' UAV drone",
    img: "UAV",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "Distractor Beacon",
    img: "Distractor_Beacon",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "AT-47 Anti-Tank Emplacement",
    img: "AT-47",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "A/MG-II Minigun Turret",
    img: "MG-II",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "A/RX-34 Railcannon Turret",
    img: "RX-34",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "A/AC-6 Tesla Tower",
    img: "AC-6",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "Airdropped Mines",
    img: "Airdropped_Mines",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "Anti-Personnel Barrier",
    img: "Anti-Personnel_Barrier",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "Airdropped Stun Mines",
    img: "Airdropped_Stun_Mines",
    color: BGCOLOR_DEFENSIVE
  },
  {
    name: "Static Field Conductors",
    img: "Static_Field_Conductors",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Airstrike",
    img: "Airstrike",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "'Vindicator' Dive Bomb",
    img: "Vindicator",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Strafing Run",
    img: "Strafing_Run",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Close Air Support",
    img: "Close_Air_Support",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Incendiary Bombs",
    img: "Incendiary_Bombs",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Missile Barrage",
    img: "Missile_Barrage",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Thunderer Barrage",
    img: "Thunderer_Barrage",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Orbital Laser Strike",
    img: "Orbital_Laser_Strike",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "'Shredder' Missile Strike",
    img: "Shredder",
    color: BGCOLOR_OFFENSIVE
  },
  {
    name: "Railcannon Strike",
    img: "Railcannon_Strike",
    color: BGCOLOR_OFFENSIVE
  }
];

var getRandomPerk = function() {
  var id = Math.floor(Math.random()*allPerks.length);
  var rndPerk = allPerks[id];
  var newPerk = {name:rndPerk.name, img:rndPerk.img, id:id};
  return newPerk;
};

var getRandomPrimary = function() {
  var id = Math.floor(Math.random()*allPrimaries.length);
  var rndPrimary = allPrimaries[id];
  var newPrimary = {name:rndPrimary.name, img:rndPrimary.img, id:id};
  return newPrimary;
};

var getRandomStratagem = function(slot) {
  var id = Math.floor(Math.random()*allStratagems.length);
  var rndStrat = allStratagems[id];
  var newStrat = {slot:slot, name:rndStrat.name, img:rndStrat.img, color:rndStrat.color, id:id};
  return newStrat;
};
