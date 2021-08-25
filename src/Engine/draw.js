const PieceLayer = document.createElement('canvas');
const PieceCtx = PieceLayer.getContext('2d');
PieceLayer.width = 240
PieceLayer.height = 240

function drawUnit(unit,pos,board,size = 25,offset = 2.5){
  
  PieceCtx.beginPath();
  PieceCtx.drawImage(unit.İmage,board.Squares[pos].x+offset,board.Squares[pos].y+offset,size,size);
  PieceCtx.closePath();
  board.ctx.drawImage(PieceLayer,0,0)
  
  board.Squares[pos].full = true
  board.Squares[pos].unitAtTop = unit.color + unit.name
  
}
function deleteUnit(pos,board){
 
  PieceCtx.beginPath();
  PieceCtx.clearRect(board.Squares[pos].x,board.Squares[pos].y,30,30);
  PieceCtx.closePath();
  
 /*
  board.ctx.beginPath();
  board.ctx.clearRect(board.Squares[pos].x,board.Squares[pos].y,30,30);
  board.ctx.closePath();
 */
 
  board.ctx.beginPath();
  if (board.Squares[pos].white == true){board.ctx.fillStyle = 'white'}
  else if (board.Squares[pos].white == false){board.ctx.fillStyle = 'black'}
  board.ctx.fillRect(board.Squares[pos].x, board.Squares[pos].y, 30, 30);
  board.ctx.closePath();
 
  board.ctx.drawImage(PieceLayer,0,0)
  
  board.Squares[pos].full = false
  board.Squares[pos].unitAtTop = PieceCodes.empty
}
function selectUnit(pos,board,pieces){
  let choosenUnit = board.Squares[pos].unitAtTop
  deleteUnit(pos,board)
  eval(`drawUnit(pieces.${choosenUnit},pos,board,30,0,0)`)
}
function deSelectUnit(pos,board,pieces){
  let choosenUnit = board.Squares[pos].unitAtTop
  deleteUnit(pos, board)
  eval(`drawUnit(pieces.${choosenUnit},pos,board,25,2.5,2.5)`)
}