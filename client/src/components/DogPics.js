import React, { Component } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

class DogPics extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 2
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){
    const { activeItem } = this.state;
    return(
      <Container>
        <Carousel
          activeItem={this.state.activeItem}
          next={this.next}
          className="z-depth-1">

          <CarouselInner>
            {this.props.dogPhoto.map((photo, index) => (
            <CarouselItem itemId={index}>
            <View>
              <img className="d-block w-100" src={photo.$t} alt="First slide" />
              <Mask overlay="black-light"></Mask>
            </View>
          </CarouselItem>
            ))}
          </CarouselInner>

          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />

        </Carousel>
      </Container>
    );
  }
}

export default DogPics;