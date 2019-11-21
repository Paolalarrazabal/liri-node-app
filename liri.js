const dotenv = require('dotenv').config();

const keys = require("./keys.js")

// const spotify = new Spotify(keys.spotify); 

const axios = require('axios');


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



const search = process.argv[2]?process.argv[2]:undefined; 
const term = process.argv[3]?process.argv.slice(3).join(" "):undefined; 
search === "concert-this" ? findConcert(term) : undefined; 




