"use strict";

const {
	db,
	models: { User, Recipes, Tracker },
} = require("../server/db");
require("dotenv").config();

const axios = require("axios");

const key = "86333c5632071e4f7a6b2654cda85219";

async function seed() {
	await db.sync({ force: true });
	console.log("db synced!");

	const breakfast = await axios.get(
		`https://api.edamam.com/api/recipes/v2?type=public&app_id=4164eec7&app_key=${key}&mealType=Breakfast&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&random=true&field=uri&field=label&field=image&field=yield&field=calories&field=totalTime&field=cuisineType&field=mealType&field=totalNutrients`
	);

	const lunch = await axios.get(
		"https://api.edamam.com/api/recipes/v2?type=public&app_id=4164eec7&app_key=86333c5632071e4f7a6b2654cda85219&mealType=Lunch&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&random=true&field=uri&field=label&field=image&field=yield&field=calories&field=totalTime&field=cuisineType&field=mealType&field=totalNutrients"
	);

	const dinner = await axios.get(
		"https://api.edamam.com/api/recipes/v2?type=public&app_id=4164eec7&app_key=86333c5632071e4f7a6b2654cda85219&mealType=Dinner&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&random=true&field=uri&field=label&field=image&field=yield&field=calories&field=totalTime&field=cuisineType&field=mealType&field=totalNutrients"
	);

	await axios.all([breakfast, lunch, dinner]).then(
		await axios.spread(function (res1, res2, res3) {
			let recipes = [
				...res1.data.hits.splice(0, 10),
				...res2.data.hits.splice(0, 10),
				...res3.data.hits.splice(0, 10),
			];

			recipes.map(async (recipe) => {
				await Recipes.create({
					name: recipe.recipe.label,
					calories: Math.floor(recipe.recipe.calories / recipe.recipe.yield),
					protein: Math.floor(
						recipe.recipe.totalNutrients.PROCNT.quantity / recipe.recipe.yield
					),
					fat: Math.floor(
						recipe.recipe.totalNutrients.FAT.quantity / recipe.recipe.yield
					),
					carbs: Math.floor(
						recipe.recipe.totalNutrients.CHOCDF.quantity / recipe.recipe.yield
					),
					courseType: recipe.recipe.mealType[0],
					cuisine: recipe.recipe.cuisineType[0],
					cookTime: recipe.recipe.totalTime,
					imageUrl: recipe.recipe.image,
				});
			});
		})
	);

	const users = await Promise.all([
		User.create({
			username: "Hamza",
			password: "123",
			firstName: "Muhammad",
			lastName: "Hamza",
			location: "Queens, NY",
			email: "hamza@foo.com",
			age: 25,
			sex: "male",
			currentHeight: 60,
			currentWeight: 250,
			targetWeight: 200,
			startingWeight: 250,
			targetWater: 4000,
			activityFactor: "Lightly Active",
			targetChange: "Lose Weight",
		}),

		User.create({
			username: "Prince",
			password: "123",
			firstName: "Prince",
			lastName: "Karim",
			location: "Queens, NY",
			email: "prince@fullstack.com",
			age: 25,
			sex: "male",
			currentHeight: 60,
			currentWeight: 250,
			targetWeight: 200,
			startingWeight: 250,
			targetWater: 4000,
			activityFactor: "Lightly Active",
			targetChange: "Lose Weight",
		}),

		User.create({
			username: "Alvin",
			password: "123",
			firstName: "Alvin",
			lastName: "Espinal",
			location: "New York, NY",
			email: "alvin@fs.com",
			age: 25,
			sex: "male",
			currentHeight: 60,
			currentWeight: 250,
			targetWeight: 200,
			startingWeight: 250,
			targetWater: 4000,
			activityFactor: "Lightly Active",
			targetChange: "Lose Weight",
		}),

		User.create({
			username: "Andrew",
			password: "123",
			firstName: "Andrew",
			lastName: "Ozoria",
			location: "Queens, NY",
			email: "andrew@fs.com",
			age: 25,
			sex: "male",
			currentHeight: 60,
			currentWeight: 250,
			targetWeight: 200,
			startingWeight: 250,
			targetWater: 4000,
			activityFactor: "Lightly Active",
			targetChange: "Lose Weight",
		}),
	]);

	console.log(`seeded ${users.length} users`);
	console.log(`seeded successfully`);

	return {
		users: {
			Hamza: users[0],
			Andrew: users[1],
			Prince: users[2],
			Alvin: users[3],
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
