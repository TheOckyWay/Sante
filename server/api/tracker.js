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


module.exports = router;