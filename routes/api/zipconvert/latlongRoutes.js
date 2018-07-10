
const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

router
  .route("/latlong")
  .get(function (req, res) {
    console.log(req.query);
    axios
      .get(`https://www.zipcodeapi.com/rest/${process.env.zipCodeAPI}/info.json/` + req.query.zip + `/degrees`
      ).then(function (latLong) {
        console.log(latLong.data);
        res.json(latLong.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  }
)

module.exports = router;

