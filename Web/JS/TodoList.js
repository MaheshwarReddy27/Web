var todos =["Buy New Turtle"];
var input = prompt("What would you like to add?");

while(input!=="quit")
{
	if (input==="list")
		{
			console.log("**********");
			todos.forEach(function(todo,i){
			console.log(i +": " +todo);
			});
			console.log("**********");
		}

	else if (input ==="new")
		{
			var inputs = prompt("Enter new Todo?");
			todos.push(inputs);
			console.log("Todo Added")
		}
	else if (input ==="delete")
		{
			var index =prompt("Enter the index to delete");
			todos.splice(index,1);
			console.log("Todo deleted")
		}
	input = prompt("What would you like to add?");
}
	alert("Ok,You quit the app");

