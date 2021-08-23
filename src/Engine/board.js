function Not(bool){
  if (bool){
    return false
  }
  else{
    return true
  }
}

class Square{
  constructor(){
    
  }
  draw(th,x,y,id,color){
    th.ctx.beginPath();
    if (color == true){th.ctx.fillStyle = 'white'}
    else if(color == false){th.ctx.fillStyle = 'black'}
    th.ctx.fillRect(x,y,30,30)
    th.ctx.closePath();
    
    this.x = x
    this.y = y
    this.id = id
    this.white = color
    this.full = false
    this.unitAtTop = PieceCodes.empty
    th.Squares.push(this)
  }
}



class Board{
  constructor(){
    this.Squares = new Array(0)
    this.width = 240
    this.height = 240
    this.rowCount = 8
    this.columnCount = 8
    
    this.canvas = document.createElement('canvas');
    this.canvas.width = 240;
    this.canvas.height = 240;
    this.ctx = this.canvas.getContext('2d');
  }
  create(){
    this.drawBoard();
    
    this.center = document.createElement('center')
    document.body.append(this.center)
    this.center.append(this.canvas)
  }
  drawBoard(){
    let isWhite = true
    let SquareX = 0;
    let SquareY = 0;
    for (var i = 0; i < this.rowCount; i++) {
      for (var v = 0; v < this.columnCount; v++) {
        const square = new Square()
        square.draw(this,SquareX,SquareY,this.Squares.length + 1,isWhite)
        isWhite = Not(isWhite)
        SquareX += 30
      }
      isWhite = Not(isWhite)
      SquareX = 0
      SquareY += 30
    }
  }
} 

