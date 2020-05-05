import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loop: false,
      retry: 0,
      currentImage: 0,
      images: this.props.images,
      width: this.props.width
    };
    this.interval = null;
    this.imageHandler = this.imageHandler.bind(this);
  }

  switchImage = () => {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0,
        retry: this.state.retry + 1
      });
      if (this.state.retry === 3) {
        clearInterval(this.interval);
        this.setState({
          loop: false,
          retry: 0
        })
      }
    }
  };

  imageHandler = () => {
    if (!this.state.loop) {
      this.setState({
        loop: true
      });
      this.interval = setInterval(this.switchImage, 250);
    }
  };

  render = () => {
    return (
        <img
          style={{cursor: 'pointer'}}
          src={this.state.images[this.state.currentImage]}
          alt="f"
          width={this.state.width}
          onClick={this.imageHandler}
        />
    );
  }
}

export default Image