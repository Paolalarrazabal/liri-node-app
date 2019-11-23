const dotenv = require('dotenv').config();

var keys = require("./keys.js")

var Spotify = require('node-spotify-api');



const axios = require('axios');

const fs = require('fs');

const moment = require('moment');
moment().format(); 





const findConcert = (artist) => {
    console.log("searching"); 
    const URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`

    axios.get(URL).then(response => {
        
        const jsonData = response.data; 

        for (var i = 0; i < 3; i++) {
            const venueData = 
         
            `
             Venue: ${jsonData[i].venue.name}
             City:  ${jsonData[i].venue.city}
             State: ${jsonData[i].venue.region} 
             Date:  ${moment(jsonData[i].datetime).format('MM/DD/YYYY')}
             `; 
             
            console.log(venueData);
           
            
            }
        });
        
}

function findSong() {
    const spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: term, limit: 1}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
     
        // console.log(data.tracks.items); 

        const spotifyData = data.tracks.items;

        
        for (var i = 0; i < 1; i++) {
            const songData = 
            `
            Artist(s): ${spotifyData[i].artists[0].name}
            Song: ${spotifyData[i].name}
            Preview Link: ${spotifyData[i].preview_url}
            Album: ${spotifyData[i].album.name}
            `
            console.log(songData);
        }

        });

    


}


const findMovie = (movie = "Mr. Nobody") => {
    const queryUrl = `http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`;  

    axios.get(queryUrl).then( response => {
     console.log(response.data);
const OMDBData = response.data; 
     const movieData = 
     `
     Title: ${OMDBData.Title}
     Year: ${OMDBData.Year}
     IMDB Rating: ${OMDBData.imdbRating}
     Rotten Tomatoes: ${OMDBData.Ratings[1].Value}
     Country: ${OMDBData.Country}
     Language: ${OMDBData.Language}
     Plot: ${OMDBData.Plot}
     Actors: ${OMDBData.Actors}
     
     `
     console.log(movieData);
    }
        
     
        
    )
}



const findThis = () => {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error); 
    }
    
    const dataArr = data.split(",");

    
    

     search = dataArr[0]; 
     term = dataArr[1]; 

     userCommand(search, term);
   
    });
}; 



let search = process.argv[2]?process.argv[2]:undefined; 
let term = process.argv[3]?process.argv.slice(3).join(" "):undefined; 

 const userCommand = (search, term) =>  {
    search === "concert-this" ? findConcert(term) : undefined; 
    search === "spotify-this-song" ? findSong(term) : undefined; 
    search === "movie-this" ? findMovie(term) : undefined; 
    search === "do-what-it-says" ? findThis(term) : undefined;
 }
 
 userCommand(search, term); 



