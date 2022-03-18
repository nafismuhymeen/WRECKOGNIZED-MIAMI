import "./imageCard.scss";
const ImageCard = ({ image, artist, location }) => {
  return (
    <div className="image-card">
      <img src={image} alt="WRECKOGNIZED MIAMI" loading="eager" />
      <div>
        <p>Artist: {artist}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default ImageCard;
