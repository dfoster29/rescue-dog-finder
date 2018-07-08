const router = require("express").Router();
const latlongRoutes = require("./latlongRoutes")

router.use("/zipconvert", latlongRoutes);

module.exports = router;