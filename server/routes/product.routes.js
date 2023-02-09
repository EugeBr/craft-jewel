const router = require("express").Router();
const Product = require("../models/product.model");

router.get("/", (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json({ products });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
