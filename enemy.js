var Enemy = function(name, health) {
  this.name = name;
  this.health = health;
}

Enemy.prototype = {
  attackHero: function(hero) {
    hero.health -= 20;
  }
}

module.exports = Enemy;