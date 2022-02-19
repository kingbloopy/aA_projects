
// function Surrogate(){}
// Surrogate.prototype = SuperClass.prototype;
// SubClass.prototype = new Surrogate();
// SubClass.prototype.constructor = SubClass;

Function.prototype.inherits = function(Parent){
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
}
// Function.prototype.inherits = function(Parent){
//   function Surrogate(){}
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }

function MovingObject() { }

MovingObject.prototype.moves = function(){
  console.log('moving thru space!');
}

function Ship() { }
Ship.inherits(MovingObject);

Ship.prototype.floats = function(){
  console.log('floating ship!');
}

function Asteroid() { }
Asteroid.inherits(MovingObject);

let testship = new Ship();
let testasteroid = new Asteroid();
let obj = new MovingObject();

console.log(testship.moves());
console.log(testasteroid.moves());
console.log(testship.floats());

console.log(Ship instanceof Object);
console.log(testasteroid instanceof Object);

console.log(Object.getPrototypeOf(testship));
console.log(Object.getPrototypeOf(obj));

// console.log(obj.floats());

// is an instance of subclass also instance of parent class?