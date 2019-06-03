/*var num = [1,2,3];
var reversenum = num.reverse();
console.log(reversenum);*/

function reverse(arr)
{
	for (var i = arr.length - 1; i >= 0; i--) 
	{
		console.log(arr[i]);
	}
}

reverse([1,2,3,4]);



function isUniform(arr)
{
	var first =arr[0];
	for (var i = 1; i < arr.length; i++) 
	{
		if (arr[i]!==first)
			return false;
	}
	return true;
}

isUniform([1,2,3,4]);
isUniform([1,1,1,1]);


function sumArray(arr)
{	var sum =0;
	for (var i = 0; i < arr.length; i++) {
		sum =sum +arr[i]

	}
	return sum;
}

sumArray([1,2,3,4]);

function max(arr)
{ 	
	var first=arr[0];
	var maxnum;
	for (var i = 1; i < arr.length; i++) 
	{
		if(first>=arr[i])
		{
			maxnum =first
		}
		else
			maxnum =arr[i];
	}
	return maxnum;
}