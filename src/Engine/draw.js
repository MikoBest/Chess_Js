const PieceLayer = document.createElement('canvas');
const PieceCtx = PieceLayer.getContext('2d');
PieceLayer.width = 240
PieceLayer.height = 240

function drawUnit(unit,pos,board){
  PieceCtx.beginPath();
  PieceCtx.drawImage(unit.İmage,board.Squares[pos].x,board.Squares[pos].y,30,30);
  PieceCtx.closePath();
  board.ctx.drawImage(PieceLayer,0,0)
}

