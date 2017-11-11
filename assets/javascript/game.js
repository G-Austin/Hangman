//Create all the variables I may need for the game


 var wordArray = ['juniper', 'douglas fir']// 'oak', 'maple', 'cypress', 'cherry', 'pecan', 'chestnut', 'willow', 'redwood', 'pine', 'alder', 'laurel', 'locust', 'palm', 'hemlock'],
 newGame = wordArray[Math.floor(Math.random() * wordArray.length)],
 underScores = [],
 guessesRemain = [],
 wrongLetters = [],
 correctLetters = [],
 winCounter = 0,
 wrongCounter = 0,  
 alphabet = 'abcdefghijklmnopqrstuvwxyz';

//DOM
var targetDiv = document.getElementById('underscores');
var secondDiv = document.getElementById('incorrectGuess');
//document.getElementById('underscores').innerHTML = genUnderscores();
// start the game by pressing any key

console.log(newGame)

document.onkeyup = function(event) {
	var userLetterChoice = event.key;
	console.log(userLetterChoice);
}



// document.userLetterChoice = function(event2) {
// 	var userGuess = event2.keytoLowerCase();
// 	if event2 === 
// }
// -Show number of wins. When you win, change the number of wins by one.


// Show underscores based on the word length for the current word.
	// - once the user guesses a letter in the word, replace the underscore with the letter.
// Show the number of guesses remaining. 
	// Each word should have 12 opportunities to guess wrong befor the user loses.
	// if the user guess incorrectly, decrease the guesseRemain by one.
// Show a list of the letters guessed that were incorrect.

//	