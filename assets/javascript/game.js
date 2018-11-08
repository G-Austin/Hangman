var wordList = ['juniper', 'douglas','fir', 
 'oak', 'maple', 'cypress',
 'cherry', 'pecan', 'chestnut', 
 'willow', 'redwood', 'pine', 'locust',
 'palm', 'hemlock'],
 
//Random string from wordList 
word = wordList[Math.floor(Math.random() * wordList.length)]//Breaks solution into number of letters
lettersInword = [],	
//Number of blanks based on word length(solution)
underscores = 0,	
//Holds a mix of blank and solved letters
blanksAndSuccesses = [],	
//Holds all the wrong guesses
wrongLetter = [],	  
//Game counters
winCounter = 0,
lossCounter = 0,
guesses = 10;

//FUNCTIONS - to call later

function startGame() {
	// Reset variables
	guesses = 10;
	blanksAndSuccesses = [];
	wrongLetter = [];

	//Breaking the word into letters
	lettersInword = word.split("");

	//count the number of letters in the word
	underscores = lettersInword.length;

	// console.log('underscores', underscores)
	// console.log('word', word);

	//Push the underscores to the DOM
	for (var i = 0; i < underscores; i++) {
	blanksAndSuccesses.push("_");
	}


	//Reprints the guessesRemain to 10
	document.getElementById("guessesRemain").innerHTML = ("Guesses Remaining: " + guesses);
	//Prints the blanks at the beginning of each round in the HTML
	document.getElementById("underScores").innerHTML = blanksAndSuccesses.join(" ");
	//clears the wrong guesses from the previous round
	document.getElementById("wrongWord").innerHTML = ("Guessed Letters: " + wrongLetter.join(" "));
};
//Create a function that does all the comparisons for matches.
function checkLetters(letter) {

	var lettersInWord = false;
	var letter = event.key;

	// Check if a letter exists insidethe array at all
	for (var i = 0; i < underscores; i++) {
		
		if (word[i] === letter) {
			console.log('word[i] ' + word[i])
			lettersInWord = true;
		}
	}
// If the letter exists in the word, find which index
	if (lettersInWord) {
		
		for (var j = 0; j < underscores; j++) {
		//Populate the blanksAndSuccesses with every correct letter.
			if (word[j] === letter) {
			// This is where the specfic space in blanks is set and letter is equal to the letter when there is a match.
			blanksAndSuccesses[j] = letter;
			}
		}	
	}
	
	else {
		wrongLetter.push(letter);
		guesses--;
	}
}

//this is the code that runs after each guess is complete.
function roundComplete() {

//Update HTML with new number incorrect guesses, and correct guesses.
document.getElementById("guessesRemain").innerHTML = ("Guesses Remaining: " + guesses);
document.getElementById("underScores").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongWord").innerHTML = ("Guessed Letters: " + wrongLetter.join(" "));

//If all the letters match the solution...
if (lettersInword.toString() === blanksAndSuccesses.toString()) {

	winCounter++;
	// document.getElementById("#underscores").innerHTML = word;
	alert("You Win! The tree is " + word);

	document.getElementById("win-counter").innerHTML = ("Wins:  " + winCounter);
	startGame();

	}	
	else if (guesses === 0) {
		lossCounter++;
		alert("You lose :( the correct answer was " + word);

		document.getElementById("loss-counter").innerHTML = lossCounter;
		startGame();
		}
};

startGame();

document.onkeyup = function(event) {

	var letterGuessed = String.fromCharCode(event.keycode).toLowerCase();

	checkLetters(letterGuessed);

	roundComplete();

};