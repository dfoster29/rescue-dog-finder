const router = require("express").Router();
const petfinderResultRoutes = require("./api/petfinder");
const googleResultRoutes = require("./api/google");
const zipCodeRoutes = require("./api/zipconvert");

router.use("/api", petfinderResultRoutes);
router.use("/api", googleResultRoutes);
router.use("/api", zipCodeRoutes)


module.exports = router;