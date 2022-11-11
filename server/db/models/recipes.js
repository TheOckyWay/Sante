const Sequelize = require("sequelize");
const db = require("../db");

const Recipes = db.define("recipe", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  calories: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  protein: {
    type: Sequelize.INTEGER,
  },
  cuisine: {
    type: Sequelize.STRING,
  },
  diet: {
    type: Sequelize.STRING,
  },
});

module.exports = Recipes;
