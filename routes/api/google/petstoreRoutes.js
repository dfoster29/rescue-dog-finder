const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

// api call to find nearby pet stores

router
  .route("/petstores")
  .get(function (req, res) {
    
    // convert zip code to lat and long
    
    axios
      .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=pet_store&keyword=dog&key=${process.env.googlePlacesAPI}`, 
      {
        location:  `${req.query.lat}, ${req.query.long}`,
        radius: `15000`
      })
      .then(function (petStores) {
        res.json(petStores.data);
        console.log(petStores.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });

  })

module.exports = router;