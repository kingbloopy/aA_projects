const Asteroid = require("./asteroid.js")

function Game(xdim, ydim){
  this.xdim = xdim;
  this.ydim = ydim;
  this.numAsteroids = 200;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  let count = 0;
  while (count < this.numAsteroids){
    let randPos = this.randPos();
    let pos = {pos: randPos};
    let ast = new Asteroid(pos);
    this.asteroids.push(ast);
    count++;
  }
}

Game.prototype.randPos = function () {
  let randX = Math.floor(Math.random() * this.xdim)
  let randY = Math.floor(Math.random() * this.ydim)
  return [randX, randY];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.xdim, this.ydim);

  this.asteroids.forEach(ast => ast.draw(ctx));
}

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(ast => ast.move());
}

module.exports = Game;