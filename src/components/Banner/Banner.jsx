import React, { useState, useEffect } from 'react';
import './Banner.scss';
// IMAGE
import banner from '../../assets//banner/ban2.JPG';
import zema1 from '../../assets/banner/zem1.JPG';
import zema2 from '../../assets/banner/zem6.JPG';
import zema3 from '../../assets/banner/zem7.JPG';
import zema4 from '../../assets/banner/zem8.JPG';
// COMPONENTS
import CarouselItem from './CarouselItem';

const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setcurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const slides = [zema4, zema3, zema2, zema1, banner];

  return (
    <div className="container">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <CarouselItem slide={slide} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
