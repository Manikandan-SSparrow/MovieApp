const setMovies = require("../service/setMovies");
const Movie = require("../model/Movie");

async function getMovies(request, reply) {
    console.log("Test reached here.");
    try {
        const movies = await setMovies();
        console.log(movies);
        return "Sending Response";
    }
    catch(err) {
        console.log(err);
        return "Error occured";
    }
}

module.exports = getMovies;