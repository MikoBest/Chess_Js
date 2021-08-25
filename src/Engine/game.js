function isDigit(input){
  
  return !isNaN(input)
}

class Game{
  constructor(playerColor,Board){
    this.color = playerColor
    this.Board = Board
    if (playerColor == 'white'){
    this.startFen = 'RNBQKBNR/PPPPPPPP/8/8/8/8/pppppppp/rnbqkbnr'
    }
    else if (playerColor == 'black') {
    this.startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
   }
  }
  start(){
    this.Board.create();
    this.loadPieces()
  }
  loadPieces(){
    var PieceType = Object();
    
    PieceType.wPawn = new Pawn('white')
    PieceType.wKnight = new Knight('white')
    PieceType.wRook = new Rook('white')
    PieceType.wBishop = new Bishop('white')
    PieceType.wQueen = new Queen('white')
    PieceType.wKing = new King('white')
    PieceType.bPawn = new Pawn('black')
    PieceType.bKnight = new Knight('black')
    PieceType.bRook = new Rook('black')
    PieceType.bBishop = new Bishop('black')
    PieceType.bQueen = new Queen('black')
    PieceType.bKing = new King('black')
    
    this.PieceTypes = PieceType
    
  }
  decodeFen(fen){
   const Pawn = 'p'
   const Knight = 'n'
   const Rook = 'r'
   const Bishop = 'b'
   const Queen = 'q'
   const King = 'k'
 
   

   let char = fen.split('')
   var pos = 0
   for (var i = 0; i < char.length; i++) {
   if (isDigit(char[i])) {
     pos += parseInt(char[i])
   }
   switch(char[i]){
    case '/':
      break;
   case Pawn:
     drawUnit(this.PieceTypes.wPawn,pos,this.Board)
     pos += 1
     break;
   case Pawn.toUpperCase():
     drawUnit(this.PieceTypes.bPawn,pos,this.Board)
     pos += 1
     break;
   case Knight:
     drawUnit(this.PieceTypes.wKnight,pos,this.Board)
     pos += 1
     break;   
   case Knight.toUpperCase():
     drawUnit(this.PieceTypes.bKnight,pos,this.Board)
     pos += 1
      break;  
   case Bishop:
     drawUnit(this.PieceTypes.wBishop,pos,this.Board)
     pos += 1
     break;   
   case Bishop.toUpperCase():
     drawUnit(this.PieceTypes.bBishop,pos,this.Board)
     pos += 1
     break;   
   case Rook:
     drawUnit(this.PieceTypes.wRook,pos, this.Board)
     pos += 1
     break;   
   case Rook.toUpperCase():
     drawUnit(this.PieceTypes.bRook,pos, this.Board)
     pos += 1
     break;   
   case Queen:
     drawUnit(this.PieceTypes.wQueen,pos, this.Board)
     pos += 1
     break;
   case Queen.toUpperCase():
     drawUnit(this.PieceTypes.bQueen,pos, this.Board)
     pos += 1
     break;
   case King:
     drawUnit(this.PieceTypes.wKing,pos, this.Board)
     pos += 1
     break;
   case King.toUpperCase():
     drawUnit(this.PieceTypes.bKing,pos, this.Board)
     pos += 1
     break;
   }
  }
 }
}