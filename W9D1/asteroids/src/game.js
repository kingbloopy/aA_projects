const Asteroid = require

window.Game = function(xdim, ydim){
  this.xdim = xdim;
  this.ydim = ydim;
  this.numAsteroids = 20;
}

Game.prototype.addAsteroids = function(){
  let count = 0;
  while (count < this.numAsteroids){
    let randPos = this.randPos();

  }
}

Game.prototype.randPos = function () {
  let randX = Math.floor(Math.random() * this.xdim)
  let randY = Math.floor(Math.random() * this.ydim)
  return [randX, randY];
}