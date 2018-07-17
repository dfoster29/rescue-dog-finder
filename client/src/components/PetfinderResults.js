import React from "react";
import DogPics from "./DogPics";

const Dogs = props => {
  console.log(props);

  if (!props.results.petfinder.pets.pet) {
    console.log("no props here");
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-header text-center">
            <h3>Petfinder Results</h3>
          </div>

          <div className="card-body">
            <h2 className="text-center mb-4">
              Sorry. There are currently no dogs on Petfinder that match this
              breed.
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {props.results.petfinder.pets.pet.map(pet => (
            <div key={pet.id.$t} className="container mt-4">
              <div className="card">
                <div className="card-header text-center">
                  {pet.name ? (
                    <h3>{pet.name.$t}</h3>
                  ) : (
                    <h3>(no name listed)</h3>
                  )}
                </div>

                <div
                  className="card-body"
                  style={{ maxHeight: "800px"}}
                >
                  <div className="row align-items-center">
                    {pet.media.photos ? (
                      <div className="col-md-6">
                        {pet.media.photos.photo.length === 5 ? (
                          <img
                            className="img-fluid my-1 w-100"
                            alt="dog"
                            src={pet.media.photos.photo[3].$t}
                            style={{ maxHeight : "760px"}}
                          />
                        ) : (
                          <DogPics
                            dogPhoto={pet.media.photos.photo.filter(
                              photo => photo["@size"] === "x"
                            )}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="col-md-6">
                        <img
                          className="img-fluid w-100"
                          alt="dog"
                          src="https://www.victoriabox.ca/img/no-product-img.png"
                        />
                      </div>
                    )}

                    <div className="col-md-6">
                      {pet.breeds.breed[0] && pet.breeds.breed[1] ? (
                        <div>
                          Breeds: {pet.breeds.breed[0].$t} and{" "}
                          {pet.breeds.breed[1].$t}
                        </div>
                      ) : (
                        <div>Breed: {pet.breeds.breed.$t}</div>
                      )}

                      <div>Age: {pet.age.$t}</div>
                      <div>Sex: {pet.sex.$t}</div>
                      <div>
                        Location: {pet.contact.city.$t}, {pet.contact.state.$t}
                      </div>
                      <div>
                        Email:{" "}
                        <a href={"mailto:" + pet.contact.email.$t}>
                          {pet.contact.email.$t}
                        </a>
                      </div>
                      {pet.contact.phone.$t ? (
                        <div>Phone: {pet.contact.phone.$t}</div>
                      ) : (
                        <div />
                      )}
                      {/* <h5>breed(s): {pet.breeds.breed[0].$t} {pet.breeds.breed[1].$t} {pet.breeds.breed[3].$t}</h5> */}
                      <div
                        style={{ "maxHeight" : "592px", "overflow" : "scroll" }}
                        className="mt-4 text-justify w-100"
                      >
                        {pet.description.$t}
                      </div>
                      {/* <p className="text-right">scroll for more info...</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // const photos = props.results.petfinder.pets.pet.media.photos.photo.filter(
  //   photo => photo["@size"] === "x"
  // );
};

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
