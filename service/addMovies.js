const Movie = require("../model/Movie");

function addMovies(movieName, movieGenre, imageURL, totalViews, averageRating) {
    console.log("Adding a row.");
    const movie = Movie.create({
        name: movieName,
        genre: movieGenre,
        image_url: imageURL,
        total_views: totalViews,
        average_rating: averageRating 
    });
    return movie;
}

module.exports = addMovies;