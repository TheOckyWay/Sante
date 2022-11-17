const router = require("express").Router();

const {
  models: { Tracker, Recipes },
} = require("../db");

const padTo2Digits = (num) => {
  return num.toString().padStart(2, 0);
};

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
}

router.get("/", async (req, res, next) => {
  try {
    await Tracker.findOrCreate({
      where: {
        date: formatDate(new Date()),
      },
    });

    const tracker = await Tracker.findAll({ include: [Recipes] });
    console.log(tracker);
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
    const { calories, protein, carbs, fat } = req.body.newFood;

    const tracker = await Tracker.findByPk(req.params.id);
    await tracker.increment({
      totalCalories: Number(calories),
      totalProtein: Number(protein),
      totalCarbs: Number(carbs),
      totalFat: Number(fat),
    });
    res.json(tracker);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
