import React, { Component } from "react";
import API from "../utils/API";
// import Parks from "./Dogpark";
// import Vets from "./Vets";
// import Stores from "./PetStores";
import Questions from "./Questions";
import dogData from "../data/dogs.json";

class SurveyQuestions extends Component {
  state = {
    zip: "",
    zip_submitted: false,
    dog_data: dogData,
    zipcode: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  getLatLong = event => {
    event.preventDefault();
    API.getZip({
      zip: this.state.zipcode
    })
      .then(res => {
        console.log(res.data);
        this.getDogParks(res.data.lat, res.data.lng);
        this.setState({
          zip_submitted: true
        });
      })
      .catch(err => console.log(err));
  };

  getDogParks = (lat, long) => {
    console.log(lat, long);
    API.getDogPark({
      lat: lat,
      long: long
    }).then(res => {
      this.getPetStores(lat, long, res.data);
    });
  };

  getPetStores = (lat, long, dogParkData) => {
    API.getPetStore({
      lat: lat,
      long: long
    }).then(res => {
      this.getVetOffices(lat, long, dogParkData, res.data);
    });
  };

  getVetOffices = (lat, long, dogParkData, petStoreData) => {
    API.getVetOffice({
      lat: lat,
      long: long
    }).then(res => {
      this.setState({
        lat: lat,
        long: long,
        dog_parks: dogParkData,
        pet_stores: petStoreData,
        vet_offices: res.data
      });
    });
  };

  render() {
    return (
      <div>
        <div className="card-body">
          {this.state.zip_submitted ? (
            <Questions zip={this.state.zipcode}/>
          ) : (
            // <Questions questionprops={this.questionFunctionName}/>
            <div>
              <div className="container text-center my-4">
                <div className="card component-shadow">
                  <div className="card-header text-center">
                    <h3>Dog Match Survey</h3>
                  </div>
                  <div className="row justify-content-center">
                    <form className="m-4 mx-1">
                      <div className="form-group">
                        <input
                          name="zipcode"
                          value={this.state.zipcode}
                          placeholder="enter your zip code"
                          type="text"
                          onChange={this.handleOnChange}
                          className="form-control-lg my-4 component-shadow"
                        />
                        <div>
                        <button
                          type="submit"
                          className="btn btn-lg btn-success button-shadow my-3"
                          onClick={this.getLatLong}
                        >
                          Submit
                        </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SurveyQuestions;
