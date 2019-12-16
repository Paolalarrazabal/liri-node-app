# LIRI NODE APP :octocat:	

### What is LIRI? 

Liri is a language Interpretation and Recognition Interface. Using the power of Javascript and certain Node packages allows Liri to take in parameters via the node command line and in return gives you back data specific to the command. 

The Liri bot app takes in 4 different types of commands 

 #### :large_blue_diamond: concert-this 

the command concert-this followed by the artist name displays 3 upcoming concerts by the artists. The API used is the **bands in town api**. The response for each concert displays as follows.

For Example: `concert-this Billy Joel` would yield.

* Venue: Seminole Hard Rock Hotel & Casino - Hollywood, FL
* City:  Hollywood
* State: FL 
* Date:  01/10/2020
             

* Venue: Madison Square Garden
* City:  New York
* State: NY 
* Date:  01/25/2020
             

* Venue: Amalie Arena
* City:  Tampa
* State: FL 
* Date:  02/07/2020

#### :large_blue_diamond: spotify-this-song 

Spotify has it's own API that requires signing up for a free developer account through the **spotify** website, the command followed by the song name displays the song data. 

For Example: `spotify-this-song Vienna` would yield.

* Artist(s): Billy Joel
* Song: Vienna
* Preview Link: https://p.scdn.co/mp3-preview/b89ebbbeb75da99a2cf4b893d0d966df9da434ba?cid=51061dd6f893429d8de5c92fab97634f
* Album: The Stranger (Legacy Edition)

#### :large_blue_diamond: movie-this

Using the **OMDB API**, the command `movie-this` followed by the selected movie title displays the movies data including specific ratings. 

For Example: `movie-this Titanic` would yield. 

* Title: Titanic
* Year: 1997
* IMDB rating: 7.8
* Rotten Tomatoes Rating: 89%
* Country: USA
* Language: English, Swedish, Italian
* Plot: A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.
* Actors: Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates

#### :large_blue_diamond: do-what-it-says 

This final command takes in a command from the random.txt file and proceeds to show results from the command extracted from the file. This is possible with the `fs` Node package. Whatever command is written into the random.txt file will be used on the command line. 

The command `do-what-it-says` will take spotify-this-song,"I Want it That Way" and thus execute that command. 

The result would be: 

* Artist(s): Backstreet Boys
* Song: I Want It That Way
* Preview Link: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=51061dd6f893429d8de5c92fab97634f
* Album: The Hits--Chapter One



 


### :large_orange_diamond: Getting Started 

1. Clone this repository and save it. 
2. Open Terminal or Bash and navigate to where ever it was saved. 
3. Once there, install the required packages using `npm install` into the command line. 
4. Go ahead and use LIRI. 







