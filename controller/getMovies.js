const setMovies = require("../service/setMovies");
const Movie = require("../model/Movie");

async function getMovies(request, reply) {
    console.log("Test reached here.");
    try {
        const movies = await Movie.findAll();
        console.log(movies);
        return movies;
    }
    catch(err) {
        console.log(err);
        return "Error occured";
    }
}

module.exports = getMovies;