const addMovies =  require("./addMovies");
const updateViews = require("./updateViews");
const updateRating = require("./updateRating");
const deleteMovies = require("./deleteMovies");
const Movie = require("../model/Movie");

async function setMovies() {
    console.log("Setting movie details.");

    const toyStory = await addMovies("Toy Story", "Kids", 
    "https://en.wikipedia.org/wiki/Toy_Story#/media/File:Toy_Story.jpg", 
    2284, 4.6);
    console.log(`Added movie with name ${toyStory['name']}`);

    toyStory['total_views'] = updateViews(toyStory['total_views']);
    toyStory['average_rating'] = updateRating(toyStory['average_rating'], toyStory['average_rating'], 5.0);

    toyStory.save().then(() => console.log(`Movie ${toyStory['name']} saved to database.`))
    .catch(err => console.log(`Error ${err} occured.`));

    const avengers = await addMovies("Avengers", "Science Fiction", 
    "https://en.wikipedia.org/wiki/The_Avengers_(2012_film)#/media/File:The_Avengers_(2012_film)_poster.jpg",
    1038, 4.7);
    console.log(`Added movie with name ${avengers['name']}`);

    avengers['total_views'] = updateViews(avengers['total_views']);
    avengers['average_rating'] = updateRating(avengers['total_views'], avengers['average_rating'], 5.0);

    avengers.save().then(() => console.log(`Movie ${avengers['name']} saved to database.`))
    .catch(err => console.log(`Error ${err} occured.`));

    return Movie.findAll();
}

module.exports = setMovies;