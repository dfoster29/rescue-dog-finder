const router = require("express").Router();
const petfinderResultRoutes = require("./api/petfinder")
const googleResultRoutes = require("./api/google")

router.use("/api", petfinderResultRoutes);
router.use("/api", googleResultRoutes);


module.exports = router;