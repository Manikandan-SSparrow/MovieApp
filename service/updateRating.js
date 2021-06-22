const updateViews = require("./updateViews");

function updateRating(totalViews, averageRating, rating) {
    const newRating = (averageRating * totalViews + rating)/updateViews(totalViews);
    return newRating;
}

module.exports = updateRating;  