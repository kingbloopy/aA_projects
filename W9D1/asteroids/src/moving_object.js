
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




module.exports = MovingObject;