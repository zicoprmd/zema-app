import React from 'react';

import img1 from '../assets/img/z1.JPG';
import img2 from '../assets/img/z5.JPG';
import img3 from '../assets/img/z6.JPG';
import img4 from '../assets/img/z7.JPG';
import img5 from '../assets/img/z8.JPG';
import img6 from '../assets/img/z9.JPG';
import img7 from '../assets/img/z10.JPG';
import img8 from '../assets/img/z11.JPG';
import img9 from '../assets/img/z12.JPG';
import img10 from '../assets/img/z13.JPG';

const Horizontal = () => {
  return (
    <section>
      <div id="horizontal">
        <div className="image-wrapper">
          <img src={img1} className="image image-1" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img3} className="image image-2" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img2} className="image image-3" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img4} className="image image-4" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img10} className="image image-5" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img7} className="image image-6" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img6} className="image image-7" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img8} className="image image-8" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img9} className="image image-9" alt="zema" />
        </div>
        <div className="image-wrapper">
          <img src={img5} className="image image-10" alt="zema" />
        </div>
      </div>
    </section>
  );
};

export default Horizontal;
