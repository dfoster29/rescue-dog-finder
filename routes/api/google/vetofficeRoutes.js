const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

// api call to find nearby veterinary services

router
  .route("/vetoffices")
  .get(function (req, res) {

    // convert zip code to lat and long
    
    axios
      .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=veterinary_care&radius=15000&keyword=pet_store&key=${process.env.googlePlacesAPI}`, 
      {
        location: userLocation //latitude and longitude of user
      })
      .then(function (vetOffices) {
        res.json(vetOffices.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });

  })

module.exports = router;