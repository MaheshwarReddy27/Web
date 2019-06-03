var button = document.querySelector("button");
var body	= document.querySelector("body");
var isColor =false;
button.addEventListener("click",function(){
	if(isColor)
	{
			body.style.background ="purple";
	}
	else
	{
		body.style.background ="white";
	}
	isColor	=!isColor;
});