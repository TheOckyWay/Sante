//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Recipes = require("./models/recipes");
const Tracker = require("./models/tracker");
//associations could go here!
User.hasMany(Tracker);
Tracker.belongsTo(User);

Tracker.belongsToMany(Recipes, { through: "recipe_tracker" });
Recipes.belongsToMany(Tracker, { through: "recipe_tracker" });

module.exports = {
  db,
  models: {
    User,
    Recipes,
    Tracker,
  },
};
