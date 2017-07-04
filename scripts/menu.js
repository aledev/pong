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
  foreach(var option in menuOptions){
    option.selected = false;
  }
  foreach(var option in difficultyOptions){
    option.selected = false;
  }
}

Menu.prototype.render = function(){
  if(currentGameStatus == GAME_CYCLE.START){
    context.font = "20px Arial";
    context.fillText("PONG! v" + CURRENT_VERSION, 150, 20);
    var startMenu = 200;
    foreach(var option in menuOptions){
      context.font = "14px Arial";
      if(option.selected){
        context.fillText(option.text, 150, startMenu + 30);
      }
      else{

      }
      startMenu += 20;
    }
  }
};

Menu.prototype.update = function(){

};

Menu.prototype.newGame = function(){

};

Menu.prototype.gameOver = function(){

};
