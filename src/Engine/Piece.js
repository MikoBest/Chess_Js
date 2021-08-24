const PieceCodes = {
  empty: 'empty',
  white: 'white',
  black: 'black',
  
  pawn:'pawn',
  knight: 'knight',
  rook: 'rook',
  bishop: 'bishop',
  queen: 'queen',
  king: 'king'
}


class Pawn{
  constructor(color){
  this.name = PieceCodes.pawn
  if (color == 'white'){
    this.imgSrc = '/assets/w_pawn.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_pawn.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
  this.color = color
 }
}

class Knight{
  constructor(color){
  this.name = PieceCodes.knight
  if (color == 'white'){
    this.imgSrc = '/assets/w_knight.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_knight.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
  this.color = color
 }
}

class Bishop{
  constructor(color){
  this.name = PieceCodes.bishop
  if (color == 'white'){
    this.imgSrc = '/assets/w_bishop.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_bishop.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
  this.color = color
 }
}

class Rook{
  constructor(color){
  this.name = PieceCodes.rook
  if (color == 'white'){
    this.imgSrc = '/assets/w_rook.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_rook.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
  this.color = color
 }
}

class Queen{
  constructor(color){
  this.name = PieceCodes.queen
  if (color == 'white'){
    this.imgSrc = '/assets/w_queen.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_queen.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
  this.color = color
 }
}

class King{
  constructor(color){
  this.name = PieceCodes.king
  if (color == 'white'){
    this.imgSrc = '/assets/w_king.svg'
  }
    if (color == 'black'){
    this.imgSrc = '/assets/b_king.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
  this.color = color
 }
}
