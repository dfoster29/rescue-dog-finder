import React, { Component } from "react";
import API from "../utils/API";

class SurveyQuestions extends Component {
  state = {
    zip: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  getLatLong = event => {
    event.preventDefault();
    API.getZip({ zip: this.state.zipcode })
      .then(res => {
        console.log(res.data);
        this.getDogParks(res.data.lat, res.data.long);
      })
      .catch(err => console.log(err));
  };

  getDogParks = (lat, long) => {
    API.getDogPark({
      lat: lat,
      long: long
    }).then(res => {
      this.getPetStores(lat, long, res.data);
    });
  };

  getPetStores = (lat, long, dogParks) => {
    API.getPetStore({
      lat: lat,
      long: long
    }).then(res => {
      this.getVetOffices(lat, long);
    });
  };

  getVetOffices = (lat, long, dogParks, petStores) => {
    API.getVetOffice({
      lat: lat,
      long: long
    }).then(res => {
      this.setState({
        lat: lat,
        long: long,
        dogParks: dogParks,
        petStores: petStores,
        vetOffices: res.data
      });
    });
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              name="zipcode"
              value={this.state.zipcode}
              placeholder="enter your zip code"
              type="text"
              onChange={this.handleOnChange}
              className="form-control mb-2"
            />
            <button
              type="submit"
              className="btn btn-block btn-success"
              onClick={this.getLatLong}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SurveyQuestions;
