import React, { Component } from "react";
import DogPics from "./DogPics";

class Dogs extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-header text-center">
            <h3>Petfinder Results</h3>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <DogPics />
                {/* <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="http://photos.petfinder.com/photos/pets/42085534/1/?bust=1530712516&width=500&-x.jpg"
                        alt="First slide"
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="http://photos.petfinder.com/photos/pets/42085534/2/?bust=1530712523&width=500&-x.jpg"
                        alt="Second slide"
                      />
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>

                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div> */}
              </div>

              <div className="col-md-6">
                <h2 className="text-center mb-4">Posh the Pomsky</h2>
                <h4>age: baby</h4>
                <h4>sex: male</h4>
                <h4>breeds: Husky and Pomeranian</h4>
                <h4 className="mt-4">
                  "Posh is an adorable puppy. He is what they call a \"Pomsky.\"
                  (Half Pomeranian, half Husky.) He is a delightful little
                  fellow, bouncy and energetic. A little bit timid initially but
                  warms up with patience. He was born in early February so is 5
                  months old now. He weighs 10 pounds, will likely be a small
                  adult, so would do best in a household without very young
                  children."
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dogs;

//  pet image: petfinder.pets.pet[i].media.photos.photo[i] @size x
//               name: petfinder.pets.pet[i].
//               age: petfinder.pets.pet[i].
//               sex: petfinder.pets.pet[i].
//               mix: petfinder.pets.pet[i]. (if mix, display breeds, if not display breed from original search)
//               breed: petfinder.pets.pet[i].breed.breeds[i]
//               description: petfinder.pets.pet[i].description

// hard coded links for dog results display

// "http://photos.petfinder.com/photos/pets/42085534/1/?bust=1530712516&width=500&-x.jpg"
// "http://photos.petfinder.com/photos/pets/42085534/2/?bust=1530712523&width=500&-x.jpg"
