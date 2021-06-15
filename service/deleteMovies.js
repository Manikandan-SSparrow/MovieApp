const addMovies = require("./addMovies");

function deleteMovies(movie) {
    console.log("Deleting a row.");
    
    return movie.destroy();
}

module.exports = deleteMovies;