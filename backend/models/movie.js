'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie.init({
    id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    genre: DataTypes.TEXT,
    image_url: DataTypes.TEXT,
    total_views: DataTypes.INTEGER,
    average_rating: DataTypes.FLOAT,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};