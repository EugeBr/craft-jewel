const router = require("express").Router();
const Product = require("../models/Product.model");
const isAuthenticated = require("../middleware/isAuthenticated")

router.get("/", (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json({ products });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Product.findById(id)
    .then((products) => {
      res.json({ products });
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:id", isAuthenticated, (req, res, next) => {
  const { name, category, price, description, material } = req.body;
  const { id } = req.params;
  const product = Product.findByIdAndUpdate(id, {
    name,
    category,
    price,
    description,
    material
  }, { new: true })
    .then((product) => {
      res.json({ product });
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:id", isAuthenticated, (req, res, next) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: `Product ${id} deleted` });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/", isAuthenticated, (req, res, next) => {
  const { name, category, price, description, material } = req.body;
  const product = Product.create({
    name,
    category,
    price,
    description,
    material
  })
    .then((product) => {
      res.json({ product });
    })
    .catch((error) => {
      next(error);
    });
});


module.exports = router;
