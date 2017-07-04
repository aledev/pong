const KEYS = {
  LEFT_ARROW : 37,
  RIGHT_ARROW : 39,
  UP_ARROW : 38,
  DOWN_ARROW : 40,
  ENTER : 13,
  ESCAPE : 27
};

function Player(){
  this.paddle = new Paddle(175, 580, 50, 10);
}

Player.prototype.render = function(){
  this.paddle.render();
};

Player.prototype.update = function(){
  for(var key in keysDown){
    var value = Number(key);
    if(value == KEYS.LEFT_ARROW){ // left arrow
      this.paddle.move(-4, 0);
    }
    else if(value == KEYS.RIGHT_ARROW){ // right arrow
      this.paddle.move(4, 0);
    }
    else{
      this.paddle.move(0, 0);
    }
  }
};
