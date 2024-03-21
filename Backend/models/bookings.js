'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookings.belongsTo(models.event, { foreignKey: "event_id", onDelete: 'CASCADE' })
      bookings.belongsTo(models.User, { foreignKey: "user_id", onDelete: 'CASCADE' })
    }
  }
  bookings.init({
    bookingDate: DataTypes.DATEONLY,
    startTime: DataTypes.DATE,  
    endTime: DataTypes.DATE,
    estimatedHours: DataTypes.INTEGER,
    totalCost: DataTypes.INTEGER,
    guestCount: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bookings',
  });
  return bookings;
};