// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damageArg) {
  this.health -= damageArg;
};

// Viking

function Viking (name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
}

Viking.prototype = Object.create (Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damageArg) {
  this.health -= damageArg;
  if (this.health > 0) {
    return this.name + " has received " + damageArg + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

// Saxon
function Saxon (healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create (Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damageArg) {
  this.health -= damageArg;
  if (this.health > 0) {
    return "A Saxon has received " + damageArg + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (vikingObject) {
  this.vikingArmy.push(vikingObject);
};
War.prototype.addSaxon = function (saxonObject) {
  this.saxonArmy.push(saxonObject);
};

War.prototype.vikingAttack = function () {
  var sax = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
  if (this.saxonArmy[0].health <= 0) {
    this.saxonArmy.splice(0,1);
  }
  return sax;
};

War.prototype.saxonAttack = function () {
  var vik = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
  if (this.vikingArmy[0].health <= 0) {
    this.vikingArmy.splice(0,1);
  }
  return vik;
};

War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
