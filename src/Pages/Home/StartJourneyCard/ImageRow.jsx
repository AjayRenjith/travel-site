import React from "react";
import Slider from "react-slick";
import { animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageRow = ({ images, bind, onClick }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000, 
  };

  return (
    <div className="container-fluid">
      <Slider {...settings}>
        {images.map((imageUrl, index) => {
          const bindProps = bind(index) || {};
          const x = (bindProps.movement || [])[0] || 0;

          return (
            <div key={index}>
              <animated.div
                {...bindProps}
                onClick={() => onClick(index)}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "3% / 5%",
                  cursor: "grab",
                  margin: "0 10px",
                  width: "150px",
                  height: "200px",
                  transform: interpolate([x], (x) => `translateX(${x}px)`),
                  transformOrigin: "top center",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageRow;
