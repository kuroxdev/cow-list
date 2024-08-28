const sequelize = require("../config/dbConfig");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
