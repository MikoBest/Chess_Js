const PieceCount = {
  pawn: 8,
  rook: 2,
  knight: 2,
  bishop: 2,
  queen: 1,
  king: 1
}
function drawPiece(src,SquareId){
 ctx.beginPath();
 ctx.drawImage(src,Squares[SquareId].x,Squares[SquareId].y,30,30);
 ctx.closePath(); 
}



function drawPiecesAtStartPos(){
  for (var i = 0; i < PieceCount.pawn; i++) {
    drawPiece(b_pawnImg,8+i)
    drawPiece(w_pawnImg,48+i)
  }
  drawPiece(w_knightImg,57)
  drawPiece(w_knightImg,62)
  
  drawPiece(w_rookImg,56)
  drawPiece(w_rookImg,63)
  
  drawPiece(w_bishopImg, 58)
  drawPiece(w_bishopImg, 61)
  
  drawPiece(w_kingImg, 60)
  drawPiece(w_queenImg, 59)
}


window.onload = function(){
drawPiecesAtStartPos();
}