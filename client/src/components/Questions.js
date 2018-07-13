import React, { Component } from "react";
import QuestionData from "../data/questions.json";
import Dogs from "./Dogs";
import DogData from "../data/dogs.json";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      survey_complete: false,
      QuestionData: QuestionData,
      DogData: DogData,
      filteredList: DogData,
      survey_answers: []
    };
  }
  componentDidMount() {
    // console.log(QuestionData);
  }

  nextQuestion = event => {
    event.preventDefault();
    let filteredList;

    switch(this.state.counter) {
      case 0:
        filteredList = this.questionOne();
        break;
      default:
        filteredList = [...this.state.filteredList];
        break;
    }
    console.log(filteredList);
    if (this.state.counter < 7) {
      this.setState({
        counter: this.state.counter + 1,
        filteredList: filteredList
      });
    }
  };



  answerSelected = (questionID, item) => {
    console.log("answer selected");
    var answers = [...this.state.survey_answers];
    answers[questionID] = item;
    console.log(answers);
    this.setState({
      survey_answers: answers
    });
  };

  questionOne = () => {
    var dogs = [...this.state.filteredList];
      switch(this.state.survey_answers[0]) {
        case "have a dog now":
          return dogs.filter(dog => {
            // write conditional to filter out dogs
            return (dog.goodWithDogs === "yes")
          })
         default:
          return dogs;
      }
    }
  

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
                {this.state.QuestionData[this.state.counter].answers.map(
                  (item, id = this.state.counter) => {
                    return (
                      <button
                        className="btn btn-lg btn-light"
                        key = {id}
                        onClick={() => this.answerSelected(this.state.counter, item)}
                      >
                        {item}
                      </button>
                    );
                  }
                )}
                <div className="my-3">
                  {this.state.counter < 7 ? (
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
