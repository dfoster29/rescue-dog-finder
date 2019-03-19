import React, { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from "mdbreact";


// will be redoing the petfinder result images, to make a better image carousel and to better handle the drastically different image proportions


class DogPics extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    // if (this.props.dogPhoto.length > 1 ) {
    //   maxlength = this.props.dogPhoto.length - 1
    // } else {
    //   maxlength = 1
    // };

    // this.setState({
    //   maxlength: ""
    // });

    this.state = {
      activeItem: 1,
      maxLength: this.props.dogPhoto.length
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  // goToIndex(item) {
  //   if (this.state.activeItem !== item) {
  //     this.setState({
  //       activeItem: item
  //     });
  //   }
  // }

  render() {
    // const { activeItem } = this.state;
    return (
      <div>
        <Carousel
          activeItem={this.state.activeItem}
          className="z-depth-1"
          interval={false}
        >
          <CarouselInner>
            {this.props.dogPhoto.map((photo, index) => (
              <CarouselItem
                key={index}
                data-interval="false"
                itemId={index + 1}
              >
                <View>
                  <img
                    className="petfinder-photo"
                    src={photo.$t}
                    alt="First slide"
                  />
                  <Mask overlay="black-light" />
                </View>
              </CarouselItem>
            ))}
          </CarouselInner>

          <button
            className="btn btn-light m-1 px-5"
            direction="prev"
            onClick={() => {
              this.prev();
            }}
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            className="btn btn-light m-1 px-5"
            direction="next"
            onClick={() => {
              this.next();
            }}
          >
            <i className="fas fa-arrow-right" />
          </button>
        </Carousel>

      </div>
    );
  }
}

export default DogPics;
