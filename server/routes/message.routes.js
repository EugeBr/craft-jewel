const router = require("express").Router();
const Message = require("../models/Message.model");

router.get("/", (req, res, next) => {
  Message.find()
    .then((message) => {
      res.json({ message });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
