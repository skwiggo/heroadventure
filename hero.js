 var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  talk: function() {
    return "I am " + this.name + "!"
  },
  
  eat: function(food) {
    if (this.favouriteFood === food.name && food.poisoned === false) {
      this.health += food.nutrition + (food.nutrition * 0.5);
    } else if (this.favouriteFood != food.name && food.poisoned === false) { 
      this.health += food.nutrition;
    } else if (food.poisoned === true ) {
      this.health -= 30;
      }
    },
  
  attackEnemy: function(enemy) {
    enemy.health -= 20;
  }

  } 

module.exports = Hero;