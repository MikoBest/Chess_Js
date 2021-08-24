const gameBoard = new Board()
const game = new Game('white',gameBoard)
 game.start()
 
 window.onload = function(){
  game.decodeFen(game.startFen)
  console.log(gameBoard.Squares)
 }
 
