var movies=[
{
	title:"In Bruges",
	Ratings:"5 Stars",
	hasWatched:true
},
{
	title:"Frozen",
	Ratings:"4.5 Stars",
	hasWatched:false
},
{
	title:"Mad Max Fury",
	Ratings:"5 Stars",
	hasWatched:true
}];

for (var i = 0; i < movies.length; i++)
 {
	if(movies[i].hasWatched ===false)
	{
		alert("You have not seen " + movies[i].title + " - " +movies[i].Ratings);
	}
	else
	{
		alert("You have Watched "  + movies[i].title + " - " +movies[i].Ratings);	
	}
}