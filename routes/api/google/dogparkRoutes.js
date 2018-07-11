const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

// api call to find nearby dog parks

router
  .route("/dogparks")
  .get(function (req, res) {

    axios
      .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.googlePlacesAPI}`, 
      {
        params: {
          location: `${req.query.lat}, ${req.query.long}`,
          radius: 5000,
          type: "park",
          keyword: "dog"
        }
      })
      .then(function (dogParks) {
        res.json(dogParks.data);
        console.log("================================================");
        console.log("================================================");
        console.log("================================================");
        console.log(dogParks.data);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });

  })

module.exports = router;