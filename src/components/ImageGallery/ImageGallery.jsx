import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({photos, onClick}) => {
  return (
    <ul>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard {...item} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
