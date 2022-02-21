const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

// Asteroid.COLOR = 'pink';
// Asteroid.RADIUS = 10;


function Asteroid(pos){
    pos.vel = Util.randomVec(2)
    pos.color = 'pink';
    pos.radius = 10;
    MovingObject.call(this, pos);
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;