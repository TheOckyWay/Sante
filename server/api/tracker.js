const router = require("express").Router();

const {
  models: { Tracker },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const tracker = await Tracker.findAll();
    res.json(tracker);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const tracker = await Tracker.findByPk(req.params.id);
    res.json(tracker);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { calories, protein, carbs, fat, water } = req.body.newFood;

    const tracker = await Tracker.findByPk(req.params.id);
    await tracker.increment({
      totalCalories: Number(calories),
      totalProtein: Number(protein),
      totalCarbs: Number(carbs),
      totalFat: Number(fat),
      waterIntake: Number(water),
    });
    res.json(tracker);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
