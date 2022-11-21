const router = require("express").Router();
const {
  models: { User, Tracker },
} = require("../db");
module.exports = router;

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

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findByToken(await User.authenticate(req.body));

    await Tracker.findOrCreate({
      where: {
        date: formatDate(new Date()),
        userId: user.id,
      },
    });

    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

const getToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

router.put("/profile", getToken, async (req, res, next) => {
  const userId = req.user.id;
  try {
    for (let key in req.body) {
      if (req.body[key] === "") {
        delete req.body[key];
      }
    }
    const user = await User.findByPk(userId);
    const editUser = await user.update(req.body);

    res.json(editUser);
  } catch (err) {
    next(err);
  }
});
