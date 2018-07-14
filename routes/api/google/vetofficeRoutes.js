const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

// api call to find nearby veterinary services

router
  .route("/vetoffices")
  .get(function (req, res) {
    
    axios
      .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.googlePlacesAPI}`, 
      { 
        params: {
          location:  `${req.query.lat}, ${req.query.long}`,
          type: "veterinary_care",
          radius: 5000
        }
      })
      .then(function (vetOffices) {
        res.json(vetOffices.data);
        // console.log("================================================");
        // console.log("================================================");
        // console.log("================================================");
        // console.log(vetOffices.data);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });

  })

module.exports = router;