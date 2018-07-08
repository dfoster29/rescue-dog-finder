import React from "react";

state = {
  zipcode: ""
};

handleOnChange = event => {
  const { name, value } = event.target;

  this.setState({
    [name]: value
  });
}

getLatLong = event => {
  event.preventDefault();
  API.nytSearch({
    q: this.state.q
  }).then(res => {
    console.log(res.data);
    this.setState({
      articles: res.data.response.docs,
      q: ""
    })
  })
  .catch(err => console.log(err))
}


const SurveyQuestions = () => (
  <div>
    <form>
      <div className="form-group">
        <input
          name="zipcode"
          value={this.state.zipcode}
          placeholder="enter your zip code"
          type="text"
          onChange={this.handleOnChange}
          className="form-control mb-2"/>
          <button type="submit" className="btn btn-block btn-success" onClick={this.getLatLong}>Submit</button>
      </div>
    </form>
  </div>
)

export default SurveyQuestions;