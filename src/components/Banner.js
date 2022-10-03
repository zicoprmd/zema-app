import React from 'react';
// IMAGE
import banner from '../assets/banner/banner_1.JPG';

const Banner = () => {
  return (
    <section>
      <div id="banner">
        <img src={banner} className="image-banner" alt="banner1" />
      </div>
      <div className="judul">
        <h1 className="nama-anak">Zema Arazka Permadi</h1>
      </div>
    </section>
  );
};

export default Banner;