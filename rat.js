var Rat = function(name) {
  this.name = name;
}

Rat.prototype = {
  poisonFood: function(food) {
    food.poisoned = true;
  }
}

module.exports = Rat;