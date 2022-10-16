const HorizontalItem = ({ slide, i }) => {
  return (
    <div key={i} className="image-wrapper">
      <img src={slide} className="image image-1" alt="zema" />
    </div>
  );
};

export default HorizontalItem;
