const PieceCodes = {
  empty: 'empty',
  white: 'w',
  black: 'b',
  
  pawn:'Pawn',
  knight: 'Knight',
  rook: 'Rook',
  bishop: 'Bishop',
  queen: 'Queen',
  king: 'King'
}


class Pawn{
  constructor(color){
  this.name = PieceCodes.pawn
  if (color == 'white'){
    this.imgSrc = '/assets/w_pawn.svg'
    this.color = PieceCodes.white
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_pawn.svg'
    this.color = PieceCodes.black
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Knight{
  constructor(color){
  this.name = PieceCodes.knight
  if (color == 'white' || color == 'White'){
    this.imgSrc = '/assets/w_knight.svg'
    this.color = PieceCodes.white
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_knight.svg'
    this.color = PieceCodes.black
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Bishop{
  constructor(color){
  this.name = PieceCodes.bishop
  if (color == 'white'){
    this.imgSrc = '/assets/w_bishop.svg'
    this.color = PieceCodes.white
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_bishop.svg'
    this.color = PieceCodes.black
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Rook{
  constructor(color){
  this.name = PieceCodes.rook
  if (color == 'white'){
    this.imgSrc = '/assets/w_rook.svg'
    this.color = PieceCodes.white
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_rook.svg'
    this.color = PieceCodes.black
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class Queen{
  constructor(color){
  this.name = PieceCodes.queen
  if (color == 'white'){
    this.imgSrc = '/assets/w_queen.svg'
    this.color = PieceCodes.white
  }
  else if (color == 'black'){
    this.imgSrc = '/assets/b_queen.svg'
    this.color = PieceCodes.black
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}

class King{
  constructor(color){
  this.name = PieceCodes.king
  if (color == 'white'){
    this.imgSrc = '/assets/w_king.svg'
    this.color = PieceCodes.white
  }
    if (color == 'black'){
    this.imgSrc = '/assets/b_king.svg'
    this.color = PieceCodes.black
  }
  this.İmage = new Image()
  this.İmage.src = this.imgSrc
 }
}
