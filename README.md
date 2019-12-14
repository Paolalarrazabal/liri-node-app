# liri-node-app

Liri is a language Interpretation and Recognition Interface. Liri takes in parameters via the node command line and in return gives you back data specific to the command. 

The Liri bot app takes in 4 different types of commands 

#### concert-this 

- the command concert-this followed by the artist name displays 3 upcoming concerts by the artists. The API used is the bands in town api. 

The the response for each concert displays as follows: 

* Venue Name: 
* City: 
* State: 
* Date: 

#### spotify-this-song 

- Spotify has it's own API that requires signing up for a free developer account, the command followed by the song name displays the song data. 

* Artist(s): 
* Song: 
* Preview Link:
* Album: 

#### find-movie 

- Using the OMDB API, the command movie-this followed by the selected movie title displays the movies data including specific ratings. 

* Title: 
* Year: 
* IMDB rating: 
* Rotten Tomatoes Rating: 
* Country: 
* Language:
* Plot: 
* Actors: 

#### do-what-it-says 

- This final command takes in a command from the random.txt file and proceeds to show results from the command extracted from the file. This is possible with the `fs` Node package. Whatever command is written into the .txt file will be used on the command line. In this case it is spotify-this-song,"I Want it That Way". 



