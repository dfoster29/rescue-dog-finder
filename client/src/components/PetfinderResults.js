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
              Sorry. No dogs have been found on Petfinder that match this breed.
            </h2>
          </div>
        </div>
      </div>
    );
  }

  // const photos = props.results.petfinder.pets.pet.media.photos.photo.filter(
  //   photo => photo["@size"] === "x"
  // );

  return (
    <div>
      <div>
        {props.results.petfinder.pets.pet.map(pet => (
          <div className="container mt-4">
            <div className="card">
              <div className="card-header text-center">
                <h3>{pet.name.$t}</h3>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <DogPics
                      dogPhoto={pet.media.photos.photo.filter(
                        photo => photo["@size"] === "x"
                      )}
                    />
                  </div>

                  <div className="col-md-6">
                    <h4>age: {pet.age.$t}</h4>
                    <h4>sex: {pet.sex.$t}</h4>
                    <p className="mt-4">{pet.description.$t}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
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
