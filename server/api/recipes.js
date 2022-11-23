const router = require("express").Router();

const {
  models: { Recipes },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipes.findAll();
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const recipe = await Recipes.findByPk(req.params.id);
    res.json(recipe);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { foodName, calories, protein, carbs, fat, courseType } =
      req.body.newFood;
    console.log(req.body.newFood);
    const recipe = await Recipes.create({
      name: foodName,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat),
      courseType: courseType,
    });
    res.status(201).send(recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
