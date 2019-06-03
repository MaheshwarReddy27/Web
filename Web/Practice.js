var p1Button =document.querySelector("#p1");
var p2Button =document.querySelector("#p2");
var resetButton =document.querySelector("#reset");
var p1Display =document.querySelector("#p1Display");
var p2Display =document.querySelector("#p2Display");
var numInput =document.querySelector("input");
var winningScoreDisplay =document.querySelector("p span");
var p1Score =0;
var p2Score=0;
var gameOver =false;
var winnerScore =5;

p1Button.addEventListener("click", function(){
	if(!gameOver)
	{
		p1Score++;
		if (p1Score===winnerScore) 
		{
			gameOver=true;
			p1Display.classList.add("winner");
		}
	}
	p1Display.textContent =p1Score;
});


p2Button.addEventListener("click", function(){
	if (!gameOver) 
	{
		p2Score++;
		if (p2Score===winnerScore) 
		{
			gameOver=true;
			p2Display.classList.add("winner");
		}
	}
	p2Display.textContent =p2Score;
});


resetButton.addEventListener("click",function(){
		reset();

});


function reset (){
		p1Score=0;
		p2Score=0;
		p1Display.textContent=0;
		p2Display.textContent=0;
		p1Display.classList.remove("winner");
		p2Display.classList.remove("winner");
		gameOver=false;
}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent =numInput.value;
	winnerScore = Number(numInput.value);
	reset();
});

var lis =document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) 
{
	lis[i].addEventListener("mouseover",function(){
	this.classList.add("winner");
	});


	lis[i].addEventListener("mouseout",function(){
	this.classList.remove("winner");
	});

	lis[i].addEventListener("click",function(){
		this.classList.toggle("done")
	});

}
