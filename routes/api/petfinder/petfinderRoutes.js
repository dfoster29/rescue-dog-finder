const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

router
  .route("/dogs")
  .get(function (req, res) {
    
    axios
      .get(`http://api.petfinder.com/pet.find?format=json&animal=dog&key=${process.env.petfinderAPI}`, 
      {
        params: {
          location: req.query.zip,
          breed: req.query.petfinderBreed,
          size: req.query.petfinderSize
        }
      })
      .then(function (dogSearch) {
        res.json(dogSearch.data);
        console.log("this is the returned data",dogSearch.data);
        console.log("this is req.query", req.query);
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

