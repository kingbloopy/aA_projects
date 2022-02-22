// const MovingObject = require("./moving_object.js");
// const Asteroid = require("./asteroid.js");
// const Util = require("./util.js");
// const Game = require("./game.js");
const GameView = require("./game_view.js")

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    // window.MovingObject = MovingObject;
    // window.Asteroid = Asteroid;
    // window.Util = Util;
    // window.Game = Game;
    // window.ctx = ctx;
    // window.canvas = canvas;
    // window.gameView = gameView;
    // let game = new Game(canvas.width, canvas.height);
    // window.Game = game;
    // game.draw(ctx);

    let canvas = document.getElementById('game-canvas');
    canvas.height = 720;
    canvas.width = 1280;
    let ctx = canvas.getContext("2d");
    new GameView(ctx).start();

    
});