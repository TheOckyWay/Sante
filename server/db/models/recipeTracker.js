const Sequelize = require("sequelize");
const db = require("../db");

const recipeTracker = db.define("recipe_tracker", {});

module.exports = recipeTracker;
