/*function printReverse(arr)
{
	for (var i = arr.length - 1; i >= 0; i--) 
	{
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4]);*/



/*function isUniform(arr)
{
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i]!=first){
			return false;
		}
	}
	return true;
}*/


/*function sumArray(num){
	var total =0;
	for (var i = 0; i < num.length; i++) {
		 total = total + num[i];
		 
	}
return total;
}*/


/*function max(arr)
{
	var max =arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i]>max)
		{
			max=arr[i];
		}
	}
	return max;
}*/


/*Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."*/

/**//*function tellFortune(N,Z,Y,X)
{
	var N = prompt("Number of Children?");
	var Z = prompt("Partner's name?");
	var Y = prompt("Location");
	var X = prompt("Job Title?");
	alert("You will be a " +X + " in " +Y +", and married to " +Z +" with " +N +" kids");
}

tellFortune();*/

/*calculate(operation, x, y*/

function calci(op, x, y)
{
	var total;
	if(op ==="add")
	{
		total =x+y;
	}
	else if(op ==="sub")
	{
		total =x-y;
	}
	else if(op ==="mul")
	{
		total =x*y;
	}
	alert(total);

}

calci("mul", 6,5);
