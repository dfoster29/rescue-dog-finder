import React, {Component} from "react";

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
        
          <div className="jumbotron">
            <h1 className="text-center mb-4">Welcome to the Rescue Dog Finder</h1>
            <div className="container">
              <p>Here at the Rescue Dog Matcher we hope to match you with your furever friend. Upon completetion of a survey you will
              be matched with a breed of dog best suited for your current lifestyle and living situation. You will then be shown
              dogs of this breed that are currently available for adoption on Petfinder. In addition to available dogs, you will
              be shown nearby pet stores, dog parks, and veterinary offices.</p>
              <button className="btn btn-lg btn-primary">start survey</button>
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