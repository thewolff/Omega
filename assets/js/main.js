(function(){

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

var pieces = document.getElementById('puzzle').children,
board = [[0,0],[1,0],[2,0],[3,0],[0,1],[1,1],[2,1],[3,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3]],
dBoard = [];

/**
* Checks to see the possible moves for a piece
* @param {obj} event object
*/

var checkMoves = function(e) {
	console.log(e);
	var target = e.target;
	console.log(target)
};

/**
* Scrambles the set of tiles so that a user may restart the game
* @param {int[]} data An array containing a set of numbers defining
* the board state. (Optional).
* @return {Boolean} Returns true if the board was successfully scrambled. * If input data is provided, it is verified as solvable by calling the
* canBoardBeSolved function, returning true if solvable, false if
* unsolvable.
*/
var scramble = function() {
	board = board.shuffle();
	for(var i = 0, len = pieces.length; i < len; i++) {
		// Move the piece based on the x,y coords from
		// the shuffled board
		pieces[i].style.left = board[i][0]*160+'px';
		pieces[i].style.top = board[i][1]*160+'px';

		// Create a 1 dimensional array based on
		// shuffled coordinates from board
		dBoard.push(board[i][1]*4+board[i][0])


		// Add the blank class to the last piece
		if(i !== len -1) {
			// Add event listeners
			pieces[i].addEventListener('click', checkMoves);
		} else {
			if (!pieces[i].className.match(/(?:^|\s)blank(?!\S)/) ) {
				pieces[i].className += ' blank'
			}
		}
	}

	// Check to see if board is solvable
	// If not, empty the 1 dimensional array
	// and reshuffle the board
	
	if(!canBoardBeSolved(dBoard)){
		dBoard = [];
		scramble();
	} else {
		console.log(canBoardBeSolved(dBoard))
		console.log(dBoard)
	};
	return true;
};

var button = document.getElementById("scramble");
button.addEventListener('click', scramble);

})()