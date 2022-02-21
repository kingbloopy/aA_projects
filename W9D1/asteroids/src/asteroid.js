
const Util = require("util.js");
const MovingObject = require("moving_object.js");
Util.inherits(Asteroid, MovingObject);

function Asteroid(){}

Asteroid.COLOR = 'pink';
Asteroid.RADIUS = 10;