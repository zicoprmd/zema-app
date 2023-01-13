const SlideshowItem = ({ slide, i }) => {
  return (
    <div key={i} className="image-wrapper">
      <img src={slide} className="row image-1" alt="thumbnail" />
    </div>
  );
};

export default SlideshowItem;
