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
  cookTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  diet: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  protein: {
    type: Sequelize.INTEGER,
  },
  carbs: {
    type: Sequelize.INTEGER,
  },
  fat: {
    type: Sequelize.INTEGER,
  },
  courseType: {
    type: Sequelize.STRING,
  },
  cuisine: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png",
  },
});

module.exports = Recipes;

// https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png
