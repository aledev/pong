var menuOptions = [{
    text : "NEW GAME",
    value : GAME_OPTIONS.NEW_GAME,
    selected : false
  },{
    text : "END GAME",
    value : GAME_OPTIONS.END_GAME,
    selected : false
  }
];

var difficultyOptions = [{
    text : "EASY",
    value : GAME_DIFFICULTY.EASY,
    selected : false
  }, {
    text : "MEDIUM",
    value : GAME_DIFFICULTY.MEDIUM,
    selected : false
  }, {
    text : "HARD",
    value : GAME_DIFFICULTY.HARD,
    selected : false
  }
];

function Menu(){
  this.currentOption = 1;
  context.
}

Menu.prototype.render = function(){
  context.font = "20px Arial";
  context.fillText("PONG! v" + CURRENT_VERSION, 150, 20);

  context.fillText("New Game: " + this.computerScore, 330, 10)
};

Menu.prototype.update = function(){

};

Menu.prototype.newGame = function(){

};

Menu.prototype.gameOver = function(){

};
