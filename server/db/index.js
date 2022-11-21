//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Recipes = require("./models/recipes");
const Tracker = require("./models/tracker");
const recipeTracker = require("./models/recipeTracker");
//associations could go here!
User.hasMany(Tracker);
Tracker.belongsTo(User);

Tracker.belongsToMany(Recipes, { through: recipeTracker });
Recipes.belongsToMany(Tracker, { through: recipeTracker });

module.exports = {
  db,
  models: {
    User,
    Recipes,
    Tracker,
    recipeTracker,
  },
};
