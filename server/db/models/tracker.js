const Sequelize = require("sequelize");
const db = require("../db");

const Tracker = db.define("tracker", {
    totalCalories: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    waterIntake: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    totalCarbs: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    totalProtein: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    totalFat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    date: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
});


module.exports = Tracker;
