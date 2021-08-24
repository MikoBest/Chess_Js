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
  if (color == 'white'){
    this.imgSrc = '/assets/w_pawn.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_pawn.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Knight{
  constructor(color){
  if (color == 'white'){
    this.imgSrc = '/assets/w_knight.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_knight.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Bishop{
  constructor(color){
  if (color == 'white'){
    this.imgSrc = '/assets/w_bishop.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_bishop.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Rook{
  constructor(color){
  if (color == 'white'){
    this.imgSrc = '/assets/w_rook.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_rook.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Queen{
  constructor(color){
  if (color == 'white'){
    this.imgSrc = '/assets/w_queen.svg'
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_queen.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class King{
  constructor(color){
  if (color == 'white'){
    this.imgSrc = '/assets/w_king.svg'
  }
    if (color == 'black'){
    this.imgSrc = '/assets/b_king.svg'
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}
