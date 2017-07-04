// Constants
const CURRENT_VERSION = "0.1";
const MENU_OPTIONS = {
  NEW_GAME : 1,
  END_GAME : 2
};
const GAME_DIFFICULTY = {
  EASY : 1,
  MEDIUM : 2,
  HARD : 3
};
const GAME_CYCLE = {
  START : 1,
  IDLE : 2,
  PAUSE : 3,
  GAME_OVER : 4
};

var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function (callback){
    window.setTimeout(callback, 1000/60)
  };

var currentGameStatus = GAME_CYCLE.START;
var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);
var score = new Score();

window.onload = function(){
  document.body.appendChild(canvas);
  animate(step);
};

var step = function(){
  update();
  render();
  animate(step);
};

var update = function(){
  player.update();
  computer.update(ball);
  ball.update(player.paddle, computer.paddle);
};

var render = function(){
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  ball.render();
  score.render();
};
