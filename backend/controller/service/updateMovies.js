const Movie = require("../../model/Movie");

async function updateMovies(request, reply) {
    const totalViews = request.payload.totalViews;
    movie['totalViews'] = updateViews(movie['totalViews']);
    // movie['averageRating'] = updateRating(movie['averageRating'], movie['averageRating'], 5.0);
    await movie.save().then(() => console.log(`Updated views for movie ${movie['movieName']}.`))
    .catch(err => console.log(`Error ${err} occured.`));
    return movie.toJSON();
}

function updateRating(totalViews, averageRating, rating) {
    return (averageRating * totalViews + rating)/updateViews(totalViews);
}

function updateViews(totalViews) {
    return ++totalViews;
}

module.exports = updateMovies;