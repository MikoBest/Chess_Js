function whichSquareIsClicked(event,board){
  var rect = board.canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;  
  
  var e = 1
  //console.log(x,y)
  for (var i = 0; i < e; i++) {
    if (board.Squares[i].x < x && board.Squares[i].x + 30 > x){
      if (board.Squares[i].y < y && board.Squares[i].y + 30 > y){
        return board.Squares[i]
      }
      e+=1
    }
    e+=1
  }
}
