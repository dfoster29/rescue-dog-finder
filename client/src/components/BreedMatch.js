import React from "react";

const BreedMatch = props => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header text-center">
          <h3>Breed Match</h3>
        </div>

        <div className="card-body text-center">
          <h2 className="mb-4">{props.dogInfo.name}</h2>
          <img className="mb-4" alt={props.dogInfo.name} src={props.dogInfo.photo} />
          <button
            className="btn btn-lg btn-success mb-4"
            onClick={props.searchPetfinder}
          >
            show Petfinder results
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreedMatch;
