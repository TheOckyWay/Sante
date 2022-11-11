"use strict";

const {
  db,
  models: { User, Recipes },
} = require("../server/db");


async function seed() {
  await db.sync({ force: true }); 
  console.log("db synced!");

 
  const users = await Promise.all([
    User.create({ username: "Hamza", password: "123" }),
    User.create({ username: "Prince", password: "123" }),
    User.create({ username: "Alvin", password: "123" }),
    User.create({ username: "Andrew", password: "123" }),
  ]);

  await Promise.all([
    Recipes.create({
      name: "Cheese Pizza",
      calories: 300,
      protein: 50,
      cuisine: "Italian",
      diet: "vegetarian",
    }),
    Recipes.create({
      name: "French Fries",
      calories: 150,
      protein: 4,
      cuisine: "French",
      diet: "vegan",
    }),
    Recipes.create({
      name: "Bacon Egg And Cheese",
      calories: 600,
      protein: 20,
      cuisine: "New York",
      diet: "normal",
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
