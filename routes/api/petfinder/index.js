const router = require("express").Router();
const petfinderRoutes = require("./petfinderRoutes")

router.use("/petfinder", petfinderRoutes);

module.exports = router;