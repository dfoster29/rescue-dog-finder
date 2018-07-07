const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

router
  .route("/dogs")
  .get(function (req, res) {
    
    axios
      .get(`http://api.petfinder.com/pet.find?format=json&animal=dog&location=new jersey&breed=Beagle&age=Baby&key=${process.env.petfinderAPI}`, 
      {
      })
      .then(function (dogSearch) {
        res.json(dogSearch.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });

  })

  router
    .route("/breedlist")
    .get(function (req, res) {
      console.log("hit")
      axios
        .get(`http://api.petfinder.com/breed.list?format=json&key=${process.env.petfinderAPI}&animal=dog`)
        .then(function (breedList) {
          res.json(breedList.data);
          console.log(breedList.data);
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
        
    })

module.exports = router;

