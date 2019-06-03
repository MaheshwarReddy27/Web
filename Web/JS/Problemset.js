function isEven(num){
	return (num % 2 ===0);
}

function facto(num){
	if( num===0 || num===1){
		return 1;
	}
	else{
		return (num * facto(num-1));
	}
}


function kababtosnake(str){
	return str.replace(/-/g, "_")
}