const MovingObject = require("./moving_object.js");

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    window.MovingObject = MovingObject;
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext("2d");
    window.ctx = ctx
    window.canvas = canvas
});