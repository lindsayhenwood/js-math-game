var playerOneLife = 3;
var playerTwoLife = 3;

var playerOneName = prompt("What is your name?"); 
var playerTwoName = prompt("What is your name?");

var currentPlayer = 'player1';

function generateNumber() {
	return Math.ceil(Math.random() * 20);
}

var numberLeft = 4;
var numberRight = 5;

var question = "What is" + numberLeft + "+" + numberRight + "?";
var answer = prompt(question);

if (numberLeft + numberRight == answer) {
	alert("Nice one!");
} else {
	if (currentPlayer == 'player1' {
		playerOneLife -= 1;
	} else {
		playerTwoLife -= 1;
	} alert("Not quite!");

if (currentPlayer == 'player1') {
 	currentPlayer = 'player2';
} else {
	currentPlayer = 'player1';
}

if(playerOneLife = 0) {
	alert(playerTwoName + "" + "wins!");
} else
	alert(playerOneName + "" + "wins!")
}

