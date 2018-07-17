import React, { Component } from "react";
import QuestionData from "../data/questions.json";
import DogData from "../data/dogs.json";
import API from "../utils/API";
import BreedMatch from "./BreedMatch";
import PetfinderResults from "./PetfinderResults";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      survey_complete: false,
      QuestionData: QuestionData,
      DogData: DogData,
      filteredList: DogData,
      survey_answers: [],
      petfinderBreed: "",
      breedMatch: {},
      dogResultsFound: false,
      breedMatched: false,
      petfinderResults: {}
    };
  }
  componentDidMount() {
    // console.log(QuestionData);
  }

  searchPetfinder = () => {
    // event.preventDefault();
    API.getDogs({
      zip: this.props.zip,
      petfinderBreed: this.state.dogInfo.name,
      petfinderSize: this.state.dogInfo.size
    })
      .then(res => {
        this.setState({
          petfinderResults: res.data,
          dogResultsFound: true,
          breedMatched: false
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

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


    // console.log(filteredList);
    if (this.state.counter < 10) {
      this.setState({
        counter: this.state.counter + 1,
        filteredList: filteredList
      });
    }

    // console.log(filteredList);
    // if (this.state.counter < 10 && this.state.filteredList.length > 1) {
    //   this.setState({
    //     counter: this.state.counter + 1,
    //     filteredList: filteredList
    //   });
    // } else {
    //   this.submitSurvey();
    // }
  };

  answerSelected = (questionID, item) => {
    // console.log("answer selected");
    var answers = [...this.state.survey_answers];
    answers[questionID] = item;
    // console.log(answers);
    this.setState({
      survey_answers: answers
    });
  };

  questionZero = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[0]) {
      case "small: 3-30 lbs":
        return dogs.filter(dog => {
          return dog.size === "S";
        });
      case "medium: 20-60 lbs":
        return dogs.filter(dog => {
          return dog.size === "M";
        });
      case "large: 50-100 lbs":
        return dogs.filter(dog => {
          return dog.size === "L";
        });
      case "extra-large: 100+ lbs":
        return dogs.filter(dog => {
          return dog.size === "XL" || dog.size === "L";
        });
      default:
        return dogs;
    }
  };

  questionOne = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[1]) {
      case "currently have have a dog(s)":
        return dogs.filter(dog => {
          return (
            dog.goodWithDogs === "yes" || dog.goodWithDogs === "supervised"
          );
        });
      case "have never owned a dog":
        return dogs.filter(dog => {
          return dog.trainability === "easy" || dog.trainability === "medium";
        });
      default:
        return dogs;
    }
  };

  questionTwo = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[2]) {
      case "apartment":
        return dogs.filter(dog => {
          return dog.size === "S" || dog.size === "M" || dog.size === "L" || dog.activityLevel === "low";
        });
      case "house with small yard":
        return dogs.filter(dog => {
          return dog.size === "S" || dog.size === "M" || dog.size === "L";
        });
      default:
        return dogs;
    }
  };

  questionThree = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[3]) {
      case "0-10 years old":
        return dogs.filter(dog => {
          return (
            dog.goodWithKids === "yes" || dog.goodWithKids === "supervised"
          );
        });
      case "10+ years old":
        return dogs.filter(dog => {
          return (
            dog.goodWithKids === "older" ||
            dog.goodWithKids === "yes" ||
            dog.goodWithKids === "supervised"
          );
        });
      default:
        return dogs;
    }
  };

  questionFour = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[4]) {
      case "minimal to none":
        return dogs.filter(dog => {
          return dog.shedding === "low" || dog.shedding === "none";
        });
      case "moderate shedding":
        return dogs.filter(dog => {
          return (
            dog.shedding === "low" ||
            dog.shedding === "none" ||
            dog.shedding === "medium"
          );
        });
      default:
        return dogs;
    }
  };

  questionFive = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[5]) {
      case "minimal":
        return dogs.filter(dog => {
          return dog.barking === "low";
        });
      case "here and there":
        return dogs.filter(dog => {
          return dog.barking === "low" || dog.barking === "medium";
        });
      default:
        return dogs;
    }
  };

  questionSix = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[6]) {
      case "couch potato":
        return dogs.filter(dog => {
          return dog.activityLevel === "low";
        });
      case "excercise here and there":
        return dogs.filter(dog => {
          return dog.activityLevel === "medium" || dog.activityLevel === "low";
        });
      case "daily excercise":
        return dogs.filter(dog => {
          return (
            dog.activityLevel === "high" || dog.activityLevel === "very high"
          );
        });
      default:
        return dogs;
    }
  };

  questionSeven = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[7]) {
      case "1-4 hours per week":
        return dogs.filter(dog => {
          return dog.trainability === "easy";
        });
      case "4-9 hours per week":
        return dogs.filter(dog => {
          return dog.trainability === "easy" || dog.trainability === "medium";
        });
      default:
        return dogs;
    }
  };

  questionEight = () => {
    var dogs = [...this.state.filteredList];
    switch (this.state.survey_answers[8]) {
      case "no":
        return dogs.filter(dog => {
          return dog.grooming === "free";
        });
      default:
        return dogs;
    }
  };

  submitSurvey = event => {
    // event.preventDefault();
    // let filteredList;

    this.setState({
      survey_complete: true,
      dogInfo: this.state.filteredList[
        [Math.floor(Math.random() * this.state.filteredList.length)]
      ],
      breedMatched: true
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.dogResultsFound ? (
          <PetfinderResults results={this.state.petfinderResults} />
        ) : (
          ""
        )}

        {this.state.survey_complete && this.state.breedMatched ? (
          <BreedMatch
            searchPetfinder={this.searchPetfinder}
            dogInfo={this.state.dogInfo}
          />
        ) : (
          ""
        )}
        {!this.state.survey_complete && !this.state.dogResultsFound ? (
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
                  {this.state.counter < 8 ? (
                    <button
                      className="btn btn-lg btn-primary mb-4"
                      onClick={this.nextQuestion}
                    >
                      next question
                    </button>
                  ) : (
                    <button
                      className="btn btn-lg btn-success mb-4"
                      onClick={event => {
                        this.nextQuestion(event);
                        this.submitSurvey(event);
                      }}
                    >
                      show breed match
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Questions;
