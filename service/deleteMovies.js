function deleteMovies(movie) {
    console.log("Deleting a row.");
    movie['is_deleted'] = true;
    return movie;
}

module.exports = deleteMovies;