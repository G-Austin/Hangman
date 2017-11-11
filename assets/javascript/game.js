//Create all the variables I may need for the game


 	var wordArray = ['juniper', 'douglas','fir', 'oak', 'maple', 'cypress', 'cherry', 'pecan', 'chestnut', 'willow', 'redwood', 'pine', 'locust', 'palm', 'hemlock'],
	 newGame = wordArray[Math.floor(Math.random() * wordArray.length)],
	 underScores = [],
	 guessesRemain = [],
	 wrongWord = [],
	 correctWord = [],
	 winCounter = 0,
	 wrongCounter = 0,  
	  

//DOM
    underScoresDiv = document.getElementById('underScores'),
	wrongWordDiv = document.getElementById('wrongWord')
//document.getElementById('underscores').innerHTML = genUnderscores();
// start the game by pressing any key

	console.log(newGame)

	document.onkeyup = function(event) {
		var userLetterChoice = event.key;
		console.log(userLetterChoice);
}
//next I want to take the string from newGame, break it up into letters, that a function 
//can take the length, and push out the correct number of underscores.
var generateUnderscores = () => {
	for (var i = 0; i < newGame.length; i++) {
		underScores.push('_');

	}
	return underScores;
}

console.log(generateUnderscores());

//capture the users guess:

document.addEventListener('keypress', (event) => {
	var keyword = String.fromCharCode(event.keyCode);
	console.log(keyword);
//if users guess it right	
	if(newGame.indexOf(keyword) > -1) {
// add to correct word array
		correctWord.push(keyword);
		console.log(correctWord);
		// targetDiv.innerHTML = underScores;
// replace underscore with right letter
		underScores[newGame.indexOf(keyword)] = keyword;
		// document.getElementById('underScores' [0]);
		underScoresDiv.innerHTML(underScores.join(' '));

// checks to see if user word matches guesses
		if(underScores.join('') == newGame) {
			alert('You Win');
		}
		
	}
	else {
		wrongWord.push(keyword);
		console.log(wrongWord)
	}
});


//if the letter goes to the secondDiv, then wrongCounter
//which shows guesses left, should decrease by one.

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