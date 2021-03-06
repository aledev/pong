function Ball(x, y){
  this.x = x;
  this.y = y;
  this.x_speed = 0;
  this.y_speed = 3;
  this.radius = 5;
}

Ball.prototype.render = function(){
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = "#FFFFFF";
  context.fill();
};

Ball.prototype.update = function(paddle1, paddle2){
  this.x += this.x_speed;
  this.y += this.y_speed;
  var top_x = this.x - 5;
  var top_y = this.y -5;
  var bottom_x = this.x + 5;
  var bottom_y = this.y + 5;

  if(this.x - 5 < 0){ // hitting the left wall
    this.x = 5;
    this.x_speed = -this.x_speed;
  }
  else if(this.x + 5 > 400){ // hitting the right wall
    this.x = 395;
    this.x_speed = -this.x_speed;
  }

  if(this.y < 0 || this.y > 600){ // a point was scored
    if(this.y < 0){ // player hits a point!
      score.update(score.playerScore + 1, score.computerScore);
    }
    else{ // computer hits a point
      score.update(score.playerScore, score.computerScore + 1);
    }
    this.resetPosition();
  }

  if(top_y > 300){
    if(this.checkCollision(top_y, top_x, bottom_y, bottom_x, paddle1)){
      // hit the player's paddle
      this.y_speed = -3;
      this.x_speed += (paddle1.x_speed / 2);
      this.y += this.y_speed;
    }
  }
  else {
    if(this.checkCollision(top_y, top_x, bottom_y, bottom_x, paddle2)){
      // hit the computer's paddle
      this.y_speed = 3;
      this.x_speed += (paddle2.x_speed / 2);
      this.y += this.y_speed;
    }
  }
};

Ball.prototype.resetPosition = function(){
  this.x_speed = 0;
  this.y_speed = 3;
  this.x = 200;
  this.y = 300;
};

Ball.prototype.checkCollision = function(top_y, top_x, bottom_y, bottom_x, paddle){
  if(top_y < (paddle.y + paddle.height) && bottom_y > paddle.y && top_x < (paddle.x + paddle.width) && bottom_x > paddle.x){
    return true;
  }
  return false;
}
