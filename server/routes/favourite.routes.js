const router = require("express").Router();
const Favourite = require("../models/favourite.model");

router.get("/", (req, res, next) => {
  Favourite.find()
    .then((favourite) => {
      res.json({ favourite });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
