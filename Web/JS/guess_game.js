
var secretNumber =4;
var	guess = Number(prompt("Guess a Number?"));

if (guess ===secretNumber){
	alert("You got it right!")
}

else if (guess>secretNumber){
	alert("Too High try again!")
}

else{
	alert("Too Low Try again!")
}