import React, { Component } from "react";
import API from "../utils/API";


// planning to incorporate the google maps API to display a map for better visualization of locations


class DogParks extends Component {
  state = {
    zip: "",
    zipcode: "",
    data_returned: false
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
        this.getDogPark(res.data.lat, res.data.lng);
      })
      .catch(err => console.log(err));
  };

  getDogPark = (lat, long) => {
    API.getDogPark({
      lat: lat,
      long: long
    }).then(res => {
      this.setState({
        dog_parks: res.data,
        data_returned: true
      });
    });
  };

  render() {
    return (
      <div>
        <div className="container my-4">
          {this.state.data_returned ? (
            <div>
              {this.state.dog_parks.results.map(i => (
                <div
                  key={i.id}
                  className="card component-shadow content-fadein mb-5"
                >
                  <div className="card-header text-center" />
                  <div className="card-body p-3">
                    <div>
                      <h3>{i.name}</h3>
                    </div>
                    <div>
                      <h5>rating: {i.rating}</h5>
                    </div>
                    <div>
                      <h5>{i.vicinity}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="card component-shadow">
                <div className="card-header text-center">
                  <h3>Nearby Dog Parks</h3>
                </div>

                <div className="card-body text-center">
                  <div className="zip-text">Please enter your zip code.</div>
                  <div className="mt-2 mb-4">
                    <form>
                      <div className="form-group text-center">
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
                            className="btn btn-lg btn-primary button-shadow my-3"
                            onClick={this.getLatLong}
                          >
                            Search for Dog Parks
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

export default DogParks;

