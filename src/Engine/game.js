class Game{
  constructor(playerColor,Board){
    this.color = playerColor
    this.Board = Board
  }
  start(){
    this.Board.create();
  }
}