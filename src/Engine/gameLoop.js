const gameBoard = new Board()
const game = new Game('black',gameBoard)
game.start()
 
window.onload = function(){
  game.decodeFen(game.startFen)
}

var chosen = true

 
gameBoard.canvas.addEventListener('click',function(){
  let SelectedUnit = whichSquareIsClicked(event,gameBoard)
  if (chosen == false){
  chosen = true
  selectUnit(SelectedUnit.id-1,gameBoard,game.PieceTypes)
  }
  else if(chosen){
  }
})