<SCRIPT LANGUAGE = "JavaScript">


var lifeBalance = 3;
var mathQuestion = Math.floor(Math.random() * 10);
var answer = true;
var playerOne = prompt("What is" + mathQuestion + "?");
var playerTwo = prompt("What is" + mathQuestion + "?");

while (lifeBalance <= 3) {
	if (mathQuestion == answer) {
		console.log("You are smart!");
	} else if {
		(mathQuestion != answer) {
			console.log("Not!");
		} else {
			lifeBalance -= 0;
		}
	}
}
 alert(lifeBalance);
}
