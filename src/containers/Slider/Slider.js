import React from "react";
import classes from './Slider.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Slider extends React.Component {
  render = () => {
    return (
      <div className={classes.ImageContainer}>
          <Carousel
            className={classes.Slider}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={true}
            interval={5000}
          >
            {this.props.images.map((item, index) => (
                <img
                  key={index}
                  className={classes.Image}
                  src={item} alt={index}
                />
            ))}
          </Carousel>
      </div>
    );
  }
}

export default Slider