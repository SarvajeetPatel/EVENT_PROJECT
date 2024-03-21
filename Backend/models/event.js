'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      event.hasOne(models.bookings, { foreignKey: "event_id", onDelete: 'CASCADE' })
      event.belongsTo(models.venue, { foreignKey: "venue_id", onDelete: 'CASCADE' })
    }
  }
  event.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    venue_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};