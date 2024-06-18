import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({photos}) => {
  return (
    <ul>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard {...item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
