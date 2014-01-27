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

/**
* Scrambles the set of tiles so that a user may restart the game
* @param {int[]} data An array containing a set of numbers defining
* the board state. (Optional).
* @return {Boolean} Returns true if the board was successfully scrambled. * If input data is provided, it is verified as solvable by calling the
* canBoardBeSolved function, returning true if solvable, false if
* unsolvable.
*/
var scramble = function(data) {
	//Randomly generate a number between 0 and 15
	//Assign it to each piece
	var board = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	console.log(board.shuffle())
	var pieces = document.getElementById('puzzle').children;
	console.log(newPos.length)
	console.log(Math.floor((Math.random()*10)+6));
	/*
	for(var i = 0, len = newPos.length; len < 16; i++) {

	}
	*/
	console.log(pieces);
};

var button = document.getElementById("scramble");
button.addEventListener('click', scramble);

