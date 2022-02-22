function MovingObject(objOptions) {
  Object.keys(objOptions).forEach(key => {
    this[key] = objOptions[key];
  });
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
}

MovingObject.prototype.move = function(){
  if ((this.pos[0] === 500) || (this.pos[1] === 400)) {
    this.pos[0] = Math.floor(Math.random() * 1280);
    this.pos[1] = Math.floor(Math.random() * 720);
  }
  else {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}





module.exports = MovingObject;