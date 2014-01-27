/**
* Scrambles the set of tiles so that a user may restart the game
* @param {int[]} data An array containing a set of numbers defining
* the board state. (Optional).
* @return {Boolean} Returns true if the board was successfully scrambled. * If input data is provided, it is verified as solvable by calling the
* canBoardBeSolved function, returning true if solvable, false if
* unsolvable.
*/
var scramble = function(data) {
	console.log('hey')
}

var button = document.getElementById("scramble");
button.addEventListener('click', scramble, false);

