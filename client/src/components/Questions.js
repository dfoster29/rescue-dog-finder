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

    switch (this.state.counter) {
      case 0:
        filteredList = this.questionZero();
        break;
      case 1:
        filteredList = this.questionOne();
        break;
      case 2:
        filteredList = this.questionTwo();
        break;
      case 3:
        filteredList = this.questionThree();
        break;
      case 4:
        filteredList = this.questionFour();
        break;
      case 5:
        filteredList = this.questionFive();
        break;
      case 6:
        filteredList = this.questionSix();
        break;
      case 7:
        filteredList = this.questionSeven();
        break;
      case 8:
        filteredList = this.questionEight();
        break;
      default:
        filteredList = [...this.state.filteredList];
        break;
    }
    console.log(filteredList);
    if (this.state.counter < 10) {
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

  questionZero = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[0]) {
      case "currently have have a dog(s)":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.goodWithDogs === "yes";
        });
      default:
        return dogs;
    }
  };

  questionOne = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[1]) {
      case "apartment":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.size === "S" || dog.size === "M";
        });
      case "house with small yard":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.size === "S" || dog.size === "M" || dog.size === "L";
        });
      default:
        return dogs;
    }
  };

  questionTwo = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[2]) {
      case "0-10 years old":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.goodWithKids === "yes";
        });
      case "10+ years old":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return (dog.goodWithKids === "older" || dog.goodWithKids === "yes" || dog.goodWithKids === "supervised");
        });
      default:
        return dogs;
    }
  };

  questionThree = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[3]) {
      case "minimal to none":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return (dog.shedding === "low" || dog.shedding === "none");
        });
        case "moderate shedding":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return (dog.shedding === "low" || dog.shedding === "none" || dog.shedding === "medium");
        });
      default:
        return dogs;
    }
  };

  questionFour = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[4]) {
      case "minimal":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.barking === "low";
        });
        case "here and there":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return (dog.barking === "low" || dog.barking === "medium");
        });
      default:
        return dogs;
    }
  };

  questionFive = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[5]) {
      case "couch potato":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.activityLevel === "low";
        });
        case "excercise here and there":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.activtyLevel === "medium";
        });
        case "daily excercise":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return (dog.activtyLevel === "high" || dog.activtyLevel === "very high");
        });
      default:
        return dogs;
    }
  };

  questionSix = () => {

    // this question will be used to set the acceptable age range for the petfinder search.  if the user isn't willing to house train then the search will return only older dogs. if they are then the search will return all ages

    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[6]) {
      case "":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.propertyName === "";
        });
      default:
        return dogs;
    }
  };

  questionSeven = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[7]) {
      case "yes":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.size === "S";
        });
      default:
        return dogs;
    }
  };

  questionEight = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[8]) {
      case "1-4 hours per week":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.trainability === "easy";
        });
        case "4-9 hours per week":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return (dog.trainability === "easy" || dog.trainability === "medium");
        });
      default:
        return dogs;
    }
  };

  questionNine = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[9]) {
      case "no":
        return dogs.filter(dog => {
          // write conditional to filter out dogs
          return dog.grooming === "free";
        });
      default:
        return dogs;
    }
  };

  // "name": "Alaskan Malamute",
  // "photo": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001815/Alaskan-Malamute-On-White-03.jpg",
  // "size": "XL",
  // "goodWithChildren": "no",
  // "goodWithDogs": "no",
  // "trainability": "medium",
  // "grooming": "weekly",
  // "shedding": "seasonal",
  // "activityLevel": "medium",
  // "barking": "medium",
  // "group": "working"

  submitSurvey = event => {
    event.preventDefault();
    let filteredList;

    this.setState({
      survey_complete: true,
      filteredList: filteredList
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
                <h3 className="mt-5 mb-3">
                  {QuestionData[this.state.counter].question}
                </h3>
                {this.state.QuestionData[this.state.counter].answers.map(
                  (item, id = this.state.counter) => {
                    return (
                      <button
                        className="btn btn-lg btn-secondary m-4"
                        key={id}
                        onClick={() =>
                          this.answerSelected(this.state.counter, item)
                        }
                      >
                        {item}
                      </button>
                    );
                  }
                )}
                <div className="my-3">
                  {this.state.counter < 10 ? (
                    <button
                      className="btn btn-lg btn-primary mb-4"
                      onClick={this.nextQuestion}
                    >
                      next question
                    </button>
                  ) : (
                    <button
                      className="btn btn-lg btn-success mb-4"
                      onClick={this.submitSurvey}
                    >
                      show Petfinder results
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
