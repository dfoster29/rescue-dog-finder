const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

router
  .route("/dogs")
  .get(function (req, res) {
    
    axios
      .get(`http://api.petfinder.com/pet.find?format=json&animal=dog&key=${process.env.petfinderAPI}`, 
      {
        // location: // zip code 
        // breed: // breed name here,
        // age: // dog age here
        params: {
          // location:  `${req.query.lat}, ${req.query.long}`,
          // type: "veterinary_care",
          // radius: 5000
        }
      })
      .then(function (dogSearch) {
        res.json(dogSearch.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });

  })

  // router
  //   .route("/breedlist")
  //   .get(function (req, res) {
  //     console.log("hit")
  //     axios
  //       .get(`http://api.petfinder.com/breed.list?format=json&key=${process.env.petfinderAPI}&animal=dog`)
  //       .then(function (breedList) {
  //         res.json(breedList.data);
  //         console.log(breedList.data);
  //       })
  //       .catch(function(err) {
  //         console.log(err);
  //         res.json(err);
  //       });
        
  //   })

module.exports = router;

