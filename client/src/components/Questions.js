import React, { Component } from "react";
import QuestionData from "../data/questions.json";
import Dogs from "./Dogs";

class Questions extends Component {
  state = {
    counter: 0,
    survey_complete: false
  };

  componentDidMount() {
    console.log(QuestionData);
  }

  nextQuestion = event => {
    event.preventDefault();
    if (this.state.counter < 9) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  };

  submitSurvey = event => {
    event.preventDefault();
    this.setState({
      survey_complete: true
    });
  };

  render() {
    return (
      <div>
        {this.state.survey_complete ? (
          <Dogs />
        ) : (
          <div className="container mt-4 text-center">
            <div className="card">
              <div className="card-header text-center">
                <h3>Dog Match Survey</h3>
              </div>
              <div>
                <h3 className="my-3">
                  {QuestionData[this.state.counter].question}
                </h3>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    {QuestionData[this.state.counter].answers[0]}
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    {QuestionData[this.state.counter].answers[1]}
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    {QuestionData[this.state.counter].answers[2]}
                  </label>
                </div>

                <div className="my-3">
                  {this.state.counter < 9 ? (
                    <button
                      className="btn btn-lg btn-primary"
                      onClick={this.nextQuestion}
                    >
                      next question
                    </button>
                  ) : (
                    <button
                      className="btn btn-lg btn-success"
                      onClick={this.submitSurvey}
                    >
                      submit survey
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Questions;
