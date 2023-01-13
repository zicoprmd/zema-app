import React from 'react';
/**IMPORT use state dan use effect */
import { useState, useEffect } from 'react';

/**IMPORT IMAGE */
import slide0 from './image/zemaslide0.jpg';
import slide1 from './image/zemaslide1.jpg';
import slide2 from './image/zemaslide2.jpg';
import slide3 from './image/zemaslide3.jpg';
/**import SASS */
import SlideshowItem from './SlideshowItem';
import './Slideshow.scss';

const Slideshow = () => {
  // array object
  const slideshow = [slide0, slide1, slide2, slide3];
  // array index
  const [currentSlide, setcurrentSlide] = useState(0);

  return (
    <div
      id="main-wrapper"
      style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
      {slideshow.map((slide, i) => (
        <SlideshowItem slide={slide} key={i} />
      ))}
    </div>
  );
};

export default Slideshow;
