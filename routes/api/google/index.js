const router = require("express").Router();
const dogparkRoutes = require("./dogparkRoutes");
const petstoreRoutes = require("./petstoreRoutes");
const vetofficeRoutes = require("./vetofficeRoutes");

router.use("/google", dogparkRoutes);
router.use("/google", petstoreRoutes);
router.use("/google", vetofficeRoutes);

module.exports = router;