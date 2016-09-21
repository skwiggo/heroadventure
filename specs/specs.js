var assert = require("assert");
var Hero = require("../hero.js")
var Food = require("../food.js")
var Rat = require("../rat.js")
var Enemy = require("../enemy.js")

describe("Adventure Game", function() {
  var simon;
  var elvis
  var chocolate;
  var boris;
  var dirk;

  before(function() {
    simon = new Hero("Simon the Simple", 50, "Chocolate");
    elvis = new Hero("Elvis the Eternal", 50, "Curry");
    chocolate = new Food("Chocolate", 10, false);
    boris = new Rat("Boris");
    dirk = new Enemy("Dirk the Devil", 100);
  })

  it("should be able to create a hero with a name", function() {
    assert.strictEqual("Simon the Simple", simon.name);
  })

  it("should be able to say the hero's name", function() {
    assert.strictEqual("I am Simon the Simple!", simon.talk());
  })

  it("should be able to attack the enemy", function() {
    simon.attackEnemy(dirk);
    assert.strictEqual(80, dirk.health);
  })

  it("enemy can attack the player", function() {
    dirk.attackHero(simon);
    (30, simon.health);
  })

  it("should be able to replenish health by eating food - favourite food bonus", function() {
    simon.eat(chocolate);
    assert.strictEqual(45, simon.health);
  })

  it("should be able to replenish health by eating food - no favourite food bonus", function() {
    elvis.eat(chocolate);
    assert.strictEqual(60, elvis.health);
  })

  it("should be able to create food with a name", function() {
    assert.strictEqual("Chocolate", chocolate.name)
  })

  it("can poison food", function() {
    boris.poisonFood(chocolate);
    assert.strictEqual(true, chocolate.poisoned);
  })

  it("poisoned food decreases health", function() {
    boris.poisonFood(chocolate);
    simon.eat(chocolate);
    assert.strictEqual(15, simon.health);
  })


})
