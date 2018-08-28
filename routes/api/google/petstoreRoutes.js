const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

// api call to find nearby pet stores

router
  .route("/petstores")
  .get(function (req, res) {
    
    axios
      .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.googlePlacesAPI}`,
      {
        params: {
          location: `${req.query.lat}, ${req.query.long}`,
          radius: 15000,
          type: "pet_store",
          keyword: "dog"
        }
      })
      .then(function (petStores) {
        res.json(petStores.data);
        // console.log("================================================");
        // console.log("================================================");
        // console.log("================================================");
        // console.log(petStores.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });

  })

module.exports = router;