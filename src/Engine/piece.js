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
 
 Squares[SquareId].UnitAtTop = true;
}
function drawAllUnits(){
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
  
  drawPiece(b_knightImg,1)
  drawPiece(b_knightImg,6)
  
  drawPiece(b_rookImg,0)
  drawPiece(b_rookImg,7)
  
  drawPiece(b_bishopImg, 2)
  drawPiece(b_bishopImg, 5)
  
  drawPiece(b_kingImg, 4)
  drawPiece(b_queenImg, 3)
}


function drawPiecesAtStartPos(){
 drawAllUnits();
}


window.onload = function(){
drawPiecesAtStartPos();
}

