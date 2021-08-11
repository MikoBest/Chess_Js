//Creating the canvas and gets 2d context out of it
// This is for rendering later we will use
const canvas = document.createElement('canvas');
const body = document.body  //This is body elememt for appending faster we store it in a variable 
const ctx = canvas.getContext('2d');

//This lines creates a center element and drawes the canvas
//İn it
const center = document.createElement('center');
body.append(center)
center.append(canvas)

//This object defines the board object and
//stores it's width height and row, column count.
const board = {
  width: 240,
  height: 240,
  row: 8,
  column: 8,
  white: 'rgb(255,255,255)',
  black:'rgb(0,0,0)',
}

let Squares = new Array(0)


//This defines the canvas's width and height to
//the desired amoumt
canvas.width = board.width;
canvas.height = board.height;

//Changes The Color of the canvas
canvas.style = 'background-color: rgb(255,225,225)'

//Changes the posistion of the boolean argument
//And if its true it turns it into false,
//If it is false it turns it into true
//This is a classic logic gate
function Not(boolean){
  if (boolean){
    boolean = false;
  }
  else{
    boolean = true;
  }
  return boolean
}


//This function drawes the square
function drawSquare(x,y,isWhite){
  ctx.beginPath();
  //What the 2 line below does is it looks if it should draw black or white square 
 /// And then paints it that color
  if (isWhite == true){ctx.fillStyle = board.white;}
  else if (isWhite == false){ctx.fillStyle = board.black;}
 //This is the ctx function for drawing squares
  ctx.fillRect(x,y,30,30)
  ctx.closePath();
  
  
  
}

//This is the function for drawing the chess board
function drawBoard(){
  var squareX = 0; //The x where the square will be drawen
  var squareY = 0; //The y where the square will be drawen
  var isWhite = new Boolean(true); //This is the bool that where we see is the drawen square is white or black
  
for (var v = 0; v < board.column; v++) { // Every column it draws it draws 8 rows there we get 64 squares
    
    for (var i = 0; i < board.row; i++) {//This is the for loop for the rows
    
    const square = {}
      square.x = squareX
      square.y = squareY
      square.id = Squares.length
      square.isWhite = isWhite 
      Squares.push(square)
      
    
    //This function draws the squares
      drawSquare(squareX,squareY,isWhite);
    //This is for changing the color
      isWhite = Not(isWhite)
      
      
      
      
      
      //This is for drawing squares side-by-side
      squareX+=30
    }
    //This is for when we start a new row the color changes
    isWhite = Not(isWhite)
    //This is for drawing from start
    squareX = 0
    //This is for drawing to new row
    squareY += 30
  }
}



//This function drawes the board
drawBoard();

console.log(Squares)