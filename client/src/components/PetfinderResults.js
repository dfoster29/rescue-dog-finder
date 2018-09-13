import React from "react";
// import DogPics from "./DogPics";
// import SimpleSlider from "./DogPicsSlick";

const Dogs = props => {
  console.log(props);

  if (!props.results.petfinder.pets.pet) {
    console.log("no props here");
    return (
      <div className="card component-shadow">
        <div className="card-header text-center">
          <h3>Petfinder Results</h3>
        </div>

        <div className="card-body">
          <h2 className="text-center mt-5">
            Sorry. There are currently no dogs on Petfinder that match this
            breed.
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card component-shadow content-fadein mb-4">
          <div className="card-header text-center">
            <h3 className="col-md-12">
              <span>There are </span>
              {props.results.petfinder.pets.pet.length}
              <span> available dogs</span>
            </h3>
          </div>
        </div>

        {props.results.petfinder.pets.pet.map(pet => (
          <div
            key={pet.id.$t}
            className="card component-shadow content-fadein mb-5"
          >
            <div className="card-header text-center" />

            <div className="card-body p-3">
              <div className="row align-items-center">
                {pet.media.photos ? (
                  <div className="col-md-7 text-center justify-content-center">
                    {/* {pet.media.photos.photo.length === 5 ? ( */}
                      <img
                        className="img-fluid mb-3 petfinder-photo"
                        alt="dog"
                        src={pet.media.photos.photo[3].$t}
                      />
                    {/* ) : (

                      <SimpleSlider
                        dogPhoto={pet.media.photos.photo.filter(
                          photo => photo["@size"] === "x"
                        )}
                      />
                    )} */}
                  </div>
                ) : (
                  <div className="col-md-7 text-center">
                    <img
                      className="img-fluid"
                      alt="dog"
                      src="https://www.victoriabox.ca/img/no-product-img.png"
                    />
                  </div>
                )}

                <div className="col-md-5">
                  {pet.name ? (
                    <h3 className="mb-3">{pet.name.$t}</h3>
                  ) : (
                    <div>
                      <h3>(no name listed)</h3>
                    </div>
                  )}

                  {pet.breeds.breed[0] && pet.breeds.breed[1] ? (
                    <div>
                      <span className="font-weight-bold">Breeds: </span>
                      {pet.breeds.breed[0].$t} and {pet.breeds.breed[1].$t}
                    </div>
                  ) : (
                    <div>
                      <span className="font-weight-bold">Breed: </span>
                      {pet.breeds.breed.$t}
                    </div>
                  )}

                  <div>
                    <span className="font-weight-bold">Age: </span>
                    {pet.age.$t}
                  </div>
                  <div>
                    <span className="font-weight-bold">Sex: </span>
                    {pet.sex.$t}
                  </div>
                  <div>
                    <span className="font-weight-bold">Location: </span>
                    {pet.contact.city.$t}, {pet.contact.state.$t}
                  </div>
                  <div>
                    <span className="font-weight-bold">Email: </span>{" "}
                    <a href={"mailto:" + pet.contact.email.$t}>
                      {pet.contact.email.$t}
                    </a>
                  </div>
                  {pet.contact.phone.$t ? (
                    <div>
                      <span className="font-weight-bold">Phone: </span>
                      {pet.contact.phone.$t}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                {pet.description.$t ? (
                  <div className="col-md-12">
                    {/* <div className="font-weight-bold">Details:</div> */}
                    <div className="text-justify description-text petfinder-description">
                      {pet.description.$t}
                    </div>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

};

export default Dogs;

