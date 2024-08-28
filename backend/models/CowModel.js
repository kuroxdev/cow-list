const sequelize = require("../config/dbConfig");
const { DataTypes } = require("sequelize");
const Cows = sequelize.define("Cows", {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Cows;
