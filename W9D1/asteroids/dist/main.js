/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n// Asteroid.COLOR = 'pink';\n// Asteroid.RADIUS = 10;\n\n\nfunction Asteroid(pos){\n    pos.vel = Util.randomVec(2)\n    pos.color = 'pink';\n    pos.radius = 10;\n    MovingObject.call(this, pos);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nfunction Game(xdim, ydim){\n  this.xdim = xdim;\n  this.ydim = ydim;\n  this.numAsteroids = 200;\n  this.asteroids = [];\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function(){\n  let count = 0;\n  while (count < this.numAsteroids){\n    let randPos = this.randPos();\n    let pos = {pos: randPos};\n    let ast = new Asteroid(pos);\n    this.asteroids.push(ast);\n    count++;\n  }\n}\n\nGame.prototype.randPos = function () {\n  let randX = Math.floor(Math.random() * this.xdim)\n  let randY = Math.floor(Math.random() * this.ydim)\n  return [randX, randY];\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.xdim, this.ydim);\n\n  this.asteroids.forEach(ast => ast.draw(ctx));\n}\n\nGame.prototype.moveObjects = function(){\n  this.asteroids.forEach(ast => ast.move());\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\r\n\r\nfunction GameView(ctx) {\r\n    this.game = new Game(1280, 720);\r\n    this.ctx = ctx;\r\n}\r\n\r\nGameView.prototype.start = function() {\r\n    let that = this;\r\n    setInterval(function() {\r\n        that.game.draw(that.ctx);\r\n        that.game.moveObjects();\r\n    }, 20);\r\n}\r\n\r\nmodule.exports = GameView;\r\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const MovingObject = require(\"./moving_object.js\");\r\n// const Asteroid = require(\"./asteroid.js\");\r\n// const Util = require(\"./util.js\");\r\n// const Game = require(\"./game.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\r\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n    // console.log('DOM fully loaded and parsed');\r\n    // window.MovingObject = MovingObject;\r\n    // window.Asteroid = Asteroid;\r\n    // window.Util = Util;\r\n    // window.Game = Game;\r\n    // window.ctx = ctx;\r\n    // window.canvas = canvas;\r\n    // window.gameView = gameView;\r\n    // let game = new Game(canvas.width, canvas.height);\r\n    // window.Game = game;\r\n    // game.draw(ctx);\r\n\r\n    let canvas = document.getElementById('game-canvas');\r\n    canvas.height = 720;\r\n    canvas.width = 1280;\r\n    let ctx = canvas.getContext(\"2d\");\r\n    new GameView(ctx).start();\r\n\r\n    \r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(objOptions) {\n  Object.keys(objOptions).forEach(key => {\n    this[key] = objOptions[key];\n  });\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n  if ((this.pos[0] === 500) || (this.pos[1] === 400)) {\n    this.pos[0] = Math.floor(Math.random() * 1280);\n    this.pos[1] = Math.floor(Math.random() * 720);\n  }\n  else {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n}\n\n\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("\nconst Util = {\n  inherits(Child, Parent){\n    function Surrogate() { }\n    Surrogate.prototype = Parent.prototype;\n    Child.prototype = new Surrogate();\n    Child.prototype.constuctor = Child;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;