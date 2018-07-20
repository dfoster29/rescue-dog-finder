import React from "react";

const BreedMatch = props => {
  if (props.dogInfo) {
    return (
      <div className="card component-shadow">
        <div className="card-header text-center">
          <h3>Your closest match is:</h3>
        </div>

        <div className="card-body text-center">
          <div className="text-center">
            <h1 className="mb-3 content-fadein">{props.dogInfo.name}</h1>
          </div>
          <img
            className="breedmatch-image img-fluid rounded content-fadein component-shadow"
            alt={props.dogInfo.name}
            src={props.dogInfo.photo}
          />

          <div className="text-center">
            <button
              className="btn btn-lg btn-secondary my-3 button-shadow"
              onClick={props.searchPetfinder}
            >
              show Petfinder results
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default BreedMatch;
