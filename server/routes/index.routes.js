const router = require("express").Router();
const authRoutes = require("./auth.routes");
const jewelRoutes = require("./product.routes");
const messageRoutes = require("./message.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/jewel", jewelRoutes);
router.use("/message", messageRoutes);

module.exports = router;
