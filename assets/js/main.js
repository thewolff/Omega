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
dataBoard
board = [[0,0],[1,0],[2,0],[3,0],[0,1],[1,1],[2,1],[3,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3]],
dBoard = [];

/**
* Checks to see the possible moves for a piece
* @param {obj} event object
*/

var checkMoves = function(e) {
	console.log(e);
};

/**
* Scrambles the set of tiles so that a user may restart the game
* @param {int[]} data An array containing a set of numbers defining
* the board state. (Optional).
* @return {Boolean} Returns true if the board was successfully scrambled. * If input data is provided, it is verified as solvable by calling the
* canBoardBeSolved function, returning true if solvable, false if
* unsolvable.
*/
var scramble = function(data) {
	board = board.shuffle();
	for(var i = 0, len = pieces.length; i < len; i++) {
		pieces[i].style.left = board[i][0]*160+'px';
		pieces[i].style.top = board[i][1]*160+'px';
		var x = board[i][0];
		var y = board[i][1];
		var w = 4;
		dBoard.push(y*w+x)
		pieces[i].addEventListener('click', checkMoves);
		if(i == len -1) {
			console.log('end')
			if (!pieces[i].className.match(/(?:^|\s)blank(?!\S)/) ) {
				pieces[i].className += ' blank'
			}
			if(!canBoardBeSolved(dBoard)){
				dBoard = [];
				scramble();
			};
			
		}
	}
	return true;
};

var button = document.getElementById("scramble");
button.addEventListener('click', scramble);

})()