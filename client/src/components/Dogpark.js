import React from "react";

const Parks = props => {
  if (props.dog_parks) {
    return (
      <div>
        <button className="btn btn-lg btn-primary" onClick="">
          search for dogparks
        </button>
      </div>
    );
  }
};

export default Parks;
