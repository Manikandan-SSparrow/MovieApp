const Movie = require("../model/Movie");

async function addMovies(movieName, movieGenre, imageURL, totalViews, averageRating) {
    console.log("Adding a row, returning if exists.");
    const [movie, created] = await Movie.findOrCreate({
        where: {
            name: movieName
        },
        defaults: {
            genre: movieGenre,
            image_url: imageURL,
            total_views: totalViews,
            average_rating: averageRating 
        }
    });
    console.log(`Is movie created? ${created}`);
    return movie;
}

module.exports = addMovies;