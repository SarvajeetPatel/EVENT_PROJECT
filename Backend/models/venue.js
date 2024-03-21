'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      venue.hasMany(models.event, { foreignKey: "venue_id", onDelete: 'CASCADE' })
      venue.belongsTo(models.city, { foreignKey: "city_id", onDelete: 'CASCADE' })
    }
  }
  venue.init({
    name: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    chargesPerHour: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'venue',
  });
  return venue;
};