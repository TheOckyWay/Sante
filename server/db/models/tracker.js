const Sequelize = require("sequelize");
const db = require("../db");

const Tracker = db.define("tracker", {
  totalCalories: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  waterIntake: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalCarbs: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalProtein: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalFat: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Tracker;
