async function deleteMovies(request, reply) {
    console.log("Deleting a row.");

    const {movieName} = request.body;
    await Movie.destroy({where: {name: movieName}}).then(() => console.log(`Deleted movie ${movie['movieName']}.`))
    .catch(err => console.log(`Error ${err} occured.`));

    return "Movie Deleted";
}

module.exports = deleteMovies;