import React, { Component } from "react";
import API from "../utils/API";
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

        this.setState({
          zip_submitted: true,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container my-4">
        {this.state.zip_submitted ? (
          <Questions zip={this.state.zipcode} />
        ) : (

          <div>
            <div className="card component-shadow">
              <div className="card-header text-center">
                <h3>Dog Match Survey</h3>
              </div>

              <div className="card-body text-center">
              <div className="zip-text">Please enter your zip code for nearby Petfinder results.</div>
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
                          Start Survey
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
    );
  }
}

export default SurveyQuestions;
