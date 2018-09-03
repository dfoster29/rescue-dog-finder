import React, { Component } from "react";
import Slider from "react-slick";

var imgStyle = {
  height: "400px",
  width: "auto"
}

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings} className="mb-3">
          {this.props.dogPhoto.map((photo, index) => (
            <img className="img-fluid petfinder-photo" src={photo.$t} key={photo["@id"]} alt="slide" style={imgStyle}/>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
