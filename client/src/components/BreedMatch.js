import React from "react";

const BreedMatch = props => {
  return (
    <div className="container mt-4">
      <div className="card component-shadow">
        <div className="card-header text-center">
          <h3>You've matched with:</h3>
        </div>

        <div className="card-body">
          <div className="text-center">
            <h1 className="mb-3 content-fadein">{props.dogInfo.name}</h1>
          </div>
          <div className="row">
            <div className="col-md-8 text-center mb-3">
              <img className="img-fluid rounded content-fadein"
                alt={props.dogInfo.name}
                src={props.dogInfo.photo}
              />

            </div>

            <div className="col-md-4">
              <div className="mb-5 text-justify">
                {props.dogInfo.description}
              </div>
              <div className="text-center">
                <button
                  className="btn btn-lg btn-success mb-4 button-shadow"
                  onClick={props.searchPetfinder}
                >
                  show Petfinder results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedMatch;
