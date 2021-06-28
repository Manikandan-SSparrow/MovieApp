const Movie = require("../../model/Movie");

async function setMovies(request, reply) {
    console.log("Setting movie details.");

    console.log(request);

    const {movieName, movieGenre, imageURL, totalViews, averageRating} = request.payload;

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

    return reply = movie.toJSON();
}

module.exports = setMovies;