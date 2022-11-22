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
    // o: check for when you don't find a recipe
    const recipe = await Recipes.findByPk(req.params.id);
    res.json(recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
