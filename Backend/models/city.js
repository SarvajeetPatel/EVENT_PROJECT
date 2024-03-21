'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      city.belongsTo(models.state, { foreignKey: "state_id", onDelete: 'CASCADE' })
      city.hasMany(models.venue, { foreignKey: "city_id", onDelete: 'CASCADE' })
    }
  }
  city.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};