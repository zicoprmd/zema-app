const CarouselItem = ({ slide, stopSlide, startSlide }) => {
  return (
    <div id="banner" className="carousel-item">
      <img src={slide} className="image-banner" alt="banner" />
      <div className="judul">
        <h1 className="nama-anak">Zema Arazka Permadi</h1>
      </div>
    </div>
  );
};

export default CarouselItem;
