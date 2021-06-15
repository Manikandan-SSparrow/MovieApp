const updateViews = require("./updateViews");

function updateRating(totalViews, averageRating, rating) {
    return (averageRating * totalViews + rating)/updateViews(totalViews);
}

module.exports = updateRating;