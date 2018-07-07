const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

// api call to find nearby pet stores

router
  .route("/petstores")
  .get(function (req, res) {
    
    // convert zip code to lat and long
    
    axios
      .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.736854, -74.446376&radius=15000&type=pet_store&keyword=dog&key=${process.env.googlePlacesAPI}`, 
      {
        // location: "40.736854,-74.446376" //latitude and longitude of user
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