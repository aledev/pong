function Score(){
  this.limit = 10;
  this.playerScore = 0;
  this.computerScore = 0;
}

Score.prototype.render = function(){
  context.font = "10px Arial";
  context.fillText("Player 01: " + this.playerScore, 10, 10);
  context.fillText("Player 02: " + this.computerScore, 330, 10)
};

Score.prototype.update = function(playerScore, computerScore){
  this.playerScore = playerScore;
  this.computerScore = computerScore;

  if(this.playerScore == this.limit){

  }
  else if(this.computerScore == this.limit){

  }
};
