import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      images: this.props.images,
      width: this.props.width
    };
  }

  switchImage = () => {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
  };

  componentDidMount() {
    setInterval(this.switchImage, 250);
  }

  render = () => {
    return (
      <div className="container mt-5">
        <h1 style={{fontSize: '5em'}} className="text-center font-weight-bold m-0 p-0">Мамочка!!! Мы тебя</h1>
        <div style={{height: '150px'}}>
          <img
            src={this.state.images[this.state.currentImage]}
            alt="f"
            width={this.state.width}
            onClick={this.imageHandler}
          />
        </div>
        <h1 style={{fontSize: '5em'}} className="text-center font-weight-bold mt-5">И приготовили тебе</h1>
        <h1 style={{fontSize: '5em', height: '350px'}} className="text-center font-weight-bold mt-5">небольшой подарок:</h1>
      </div>
    );
  }
}

export default Header