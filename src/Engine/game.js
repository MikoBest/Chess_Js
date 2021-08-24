class Game{
  constructor(playerColor,Board){
    this.color = playerColor
    this.Board = Board
    this.startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
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
   for (var i = 0; i < char.length; i++) {
    if (char[i] == Pawn){
     drawUnit(this.PieceTypes.wPawn,i,this.Board)
   }
   else if(char[i] == Pawn.toUpperCase()){
     drawUnit(this.PieceTypes.bPawn,i,this.Board)
   }
  }
 }
}