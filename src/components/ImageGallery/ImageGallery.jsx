import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({photos, onClick}) => {
  return (
    <ul className="flex gap-6 flex-wrap justify-center">
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard {...item} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
