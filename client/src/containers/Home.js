import React, {Component} from "react";
import API from "../utils/API";

class Home extends Component {

  state = {

  }

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>Welcome to the Rescue Dog Finder</h1>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">

          </div>
        </div>

      </div>
    )
  }
}

export default Home;