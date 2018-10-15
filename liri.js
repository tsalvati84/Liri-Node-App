require = require("dotenv").config();


var keys = require("./keys.js");
var request = require("request");
var movieName = process.argv[2];
var spotify = require("spotify");
var action = process.argv[2];
var argument = "";

doSomething(action, argument);

switch (action) {
    case "spotify-this-song":

var songTitle = argument;
if (songTitle === "") {
    lookupSpecificSong();
} else {
    getSongInfo(songTitle);
}
break;
    
    case "movie-this":
var movieTitle = argument;
if (movieTitle === "") {
    getMovieInfo("Forest Gump");
} else {
    getMovieInfo(movieTitle);
}
break;
    case "do-what-it-says": 
    doWhatItSays();
break;
}
          
   
function movies(input) {
            var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "tt3896198&apikey=trilogy";
            console.log(queryUrl);
            request(queryUrl, function(error, response, body) {
                if(!error && response.statusCode ===200) {
                    console.log("Title: " + JSON.parse(body).Title);
                    console.log("Release Year: " + JSON.parse(body).Year);
                    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Country: " + JSON.parse(body).Country);
                    console.log("Plot: " + JSON.parse(body).Plot);
                    console.log("Actors: " + JSON.parse(body).Actors);
                }
            })
        }   
