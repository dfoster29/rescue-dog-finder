
const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

var userZipcode = "07935";

router
  .route("/latlong")
  .get(function (req, res) {
    
    axios
      .get(`https://www.zipcodeapi.com/rest/${process.env.zipCodeAPI}/info.json/` + userZipcode + `/degrees`
      ).then(function (latLong) {
        res.json(latLong.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  }
)

module.exports = router;

