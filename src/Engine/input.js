canvas.onclick = function(){
  whichSquareisClicked(event)
}







function whichSquareisClicked(event){
  let rect = canvas.getBoundingClientRect()
  let touchX = event.clientX - rect.left
  let touchY = event.clientY - rect.top
  
  for (var i = 0; i < Squares.length; i++) {
    if (Squares[i].x < touchX && Squares[i].x + 30 > touchX){
      if (Squares[i].y < touchY && Squares[i].y + 30 > touchY ){
       console.log(Squares[i])
      }
    }
  }
}