import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center mb-4">Welcome to Plenty of Pups</h1>
          <div className="container">
            <p>
              Here at Plenty of Pups we hope to match you with your
              furever friend. Upon completetion of a survey you will be matched
              with a breed of dog best suited for your current lifestyle and
              living situation. You will then be shown dogs of this breed that
              are currently available for adoption on Petfinder. In addition to
              available dogs, you can easily search for nearby pet stores, dog
              parks, and veterinary offices.
            </p>
            <NavLink className="nav-link" to="/survey">
              <div className="row justify-content-center">
                <button className="btn btn-lg btn-primary">start survey</button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
