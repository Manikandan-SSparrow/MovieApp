const addMovies = require("./addMovies");

function deleteMovies(movie) {
    console.log("Deleting a row.");
    movie['is_deleted'] = true;
    return movie.destroy();
}

module.exports = deleteMovies;