"use strict";

const {
  db,
  models: { User, Recipes, Tracker },
} = require("../server/db");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({ username: "Hamza", password: "123", firstName: 'Muhammad', lastName: 'Hamza', location: 'Queens, NY', email: 'hamza@foo.com', age: 25, sex: 'male', currentHeight: 60, currentWeight: 250, targetWeight: 200, startingWeight: 250, targetCalories:2500, targetWater: 4000, activityFactor: 'Light Active',targetChange:'Lose Weight',}),
    User.create({ username: "Prince", password: "123", firstName: 'Prince', lastName: 'Karim', location: 'Queens, NY', email: 'prince@fullstack.com'}),
    User.create({ username: "Alvin", password: "123", firstName: 'Alvin', lastName: 'Espinal', location: 'New York, NY', email: 'alvin@fs.com'}),
    User.create({ username: "Andrew", password: "123", firstName: 'Andrew', lastName: 'Espinal', location: 'Queens, NY', email: 'andrew@fs.com'}),
  ]);

  const trackers = await Promise.all([
    Tracker.create({ userId: 1, recipeId: [1,2,3], totalCalories: 2200, waterIntake: 1500, totalCarbs: 130, totalProtein: 200, totalFat: 56, date: 12122021, }),
    Tracker.create({ userId: 1, recipeId: [1,2,3], totalCalories: 2200, waterIntake: 1500, totalCarbs: 130, totalProtein: 200, totalFat: 56, date: 12122021, }),
    Tracker.create({ userId: 1, recipeId: [1,2,3], totalCalories: 2200, waterIntake: 1500, totalCarbs: 130, totalProtein: 200, totalFat: 56, date: 12122021, }),
    Tracker.create({ userId: 1, recipeId: [1,2,3], totalCalories: 2200, waterIntake: 1500, totalCarbs: 130, totalProtein: 200, totalFat: 56, date: 12122021, }),
    Tracker.create({ userId: 1, recipeId: [1,2,3], totalCalories: 2200, waterIntake: 1500, totalCarbs: 130, totalProtein: 200, totalFat: 56, date: 12122021, })


  ]);

  await Promise.all([
    Recipes.create({
      name: "Cheese Pizza",
      calories: 300,
      protein: 50,
      carbs: 100,
      fat: 5,
      cuisine: "Italian",
      diet: "Vegetarian",
      courseType: "Lunch",
      cookTime: 120,
    }),
    Recipes.create({
      name: "French Fries",
      calories: 150,
      protein: 4,
      carbs: 100,
      fat: 5,
      courseType: "Side",
      cuisine: "French",
      diet: "Vegan",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Bacon Egg and Cheese",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Lunch",
      cuisine: "American",
      diet: "Normal",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Escargot",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Dinner",
      cuisine: "French",
      diet: "Normal",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Beignet",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Appetizer",
      cuisine: "French",
      diet: "Normal",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Sushi",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Lunch",
      cuisine: "Japanese",
      diet: "Pescatarian",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Mangu",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Breakfast",
      cuisine: "Dominican",
      diet: "Normal",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Samosa",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Entree",
      cuisine: "Indian",
      diet: "Normal",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Tacos",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Lunch",
      cuisine: "Mexican",
      diet: "Normal",
      cookTime: 120,
    }),
    Recipes.create({
      name: "Poutine",
      calories: 600,
      protein: 20,
      carbs: 100,
      fat: 5,
      courseType: "Main",
      cuisine: "Canadian",
      diet: "Normal",
      cookTime: 120,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
