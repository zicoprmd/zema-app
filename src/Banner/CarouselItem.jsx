const CarouselItem = ({ slide, stopSlide, startSlide }) => {
  return (
    <div id="banner" className="carousel-item">
      <img src={slide} className="image-banner" alt="banner" />
    </div>
  );
};

export default CarouselItem;
