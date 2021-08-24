const PieceLayer = document.createElement('canvas');
const PieceCtx = PieceLayer.getContext('2d');
PieceLayer.width = 240
PieceLayer.height = 240

function drawUnit(unit,pos,board){
  PieceCtx.beginPath();
  PieceCtx.drawImage(unit.İmage,board.Squares[pos].x+2.5,board.Squares[pos].y+2.5,25,25);
  PieceCtx.closePath();
  board.ctx.drawImage(PieceLayer,0,0)
  
  board.Squares[pos].full = true
  board.Squares[pos].unitAtTop = unit.color + unit.name
  
}
