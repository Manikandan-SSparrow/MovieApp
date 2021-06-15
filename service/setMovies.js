const addMovies =  require("./addMovies");
const updateViews = require("./updateViews");
const updateRating = require("./updateRating");
const Movie = require("../model/Movie");

async function setMovies() {
    console.log("Setting movie details.");
    const toyStory = await addMovies("Toy Story", "Kids", 
    "", 
    2284, 4.6);
    const avengers = await addMovies("Avengers", "Science Fiction", 
    "https://en.wikipedia.org/wiki/The_Avengers_(2012_film)#/media/File:The_Avengers_(2012_film)_poster.jpg",
    1038, 4.7);

    toyStory['total_views'] = updateViews(toyStory['total_views']);
    toyStory['average_rating'] = updateRating(toyStory['total_views'], toyStory['average_rating'], 5.0);
    avengers['total_views'] = updateViews(avengers['total_views']);
    avengers['average_rating'] = updateRating(avengers['total_views'], avengers['average_rating'], 5.0);

    

    return Movie.findAll();
}

module.exports = setMovies;