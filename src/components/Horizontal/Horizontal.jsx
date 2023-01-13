import React from 'react';
/**import gambar */
import img1 from '../../assets/img/z1.JPG';
import img2 from '../../assets/img/z5.JPG';
import img3 from '../../assets/img/z6.JPG';
import img4 from '../../assets/img/z7.JPG';
import img5 from '../../assets/img/z8.JPG';
import img6 from '../../assets/img/z9.JPG';
import img7 from '../../assets/img/z10.JPG';
import img8 from '../../assets/img/z11.JPG';
import img9 from '../../assets/img/z12.JPG';
import img10 from '../../assets/img/z13.JPG';
import HorizontalItem from './HorizontalItem';

const Horizontal = () => {
  const slides = [img1, img2, img3, img4, img10, img6, img7, img8, img9];
  return (
    <section>
      <div id="horizontal">
        {/* buat slide dari 1 sampai 9 */}
        {slides.map((slide, i) => (
          <HorizontalItem slide={slide} key={i} />
        ))}

        <div id="zema10" className="image-wrapper">
          <img src={img5} className="image image-10" alt="zema" />
        </div>
      </div>
    </section>
  );
};

export default Horizontal;
