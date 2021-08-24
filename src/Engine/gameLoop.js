const gameBoard = new Board()
const game = new Game('black',gameBoard)
 game.start()
 
 window.onload = function(){
  game.decodeFen(game.startFen)
  console.log(gameBoard.Squares)
 }
 
