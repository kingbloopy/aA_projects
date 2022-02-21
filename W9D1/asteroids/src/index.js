const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js")

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
    window.Util = Util;
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext("2d");
    window.ctx = ctx
    window.canvas = canvas
});