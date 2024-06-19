import {useEffect, useRef} from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({photos, onClick}) => {
  const photoRef = useRef(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const scrollToNewPhotos = () => {
      if (photoRef.current) {
        const heightEl = photoRef.current.getBoundingClientRect().height;
        window.scrollBy({
          top: heightEl * 1.5,
          behavior: "smooth",
        });
      }
    };

    setTimeout(scrollToNewPhotos, 100);
  }, [photos]);
  return (
    <ul className="flex gap-6 flex-wrap justify-center">
      {photos.map((item) => (
        <li key={item.id} className="gallery-item" ref={photoRef}>
          <ImageCard {...item} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
