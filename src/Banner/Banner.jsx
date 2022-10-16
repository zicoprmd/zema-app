import React, { useState, useEffect } from 'react';
import './Banner.scss';
// IMAGE
import banner from '../assets/banner/ban2.JPG';
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

  const slides = [
    'http://localhost:3000/zema-app/assets/banner/zem6.JPG',
    'http://localhost:3000/zema-app/assets/banner/zem1.JPG',
    'http://localhost:3000/zema-app/assets/banner/zem7.JPG',
    'http://localhost:3000/zema-app/assets/banner/zem8.JPG',
    banner,
  ];

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
