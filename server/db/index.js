//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Recipes = require("./models/recipes");
const Tracker = require('./models/tracker')
//associations could go here!
User.hasMany(Tracker);
Tracker.belongsTo(User);

Tracker.hasMany(Recipes);
Recipes.belongsTo(Tracker);



// o: remove spacing



module.exports = {
  db,
  models: {
    User,
    Recipes,
    Tracker,
  },
};
