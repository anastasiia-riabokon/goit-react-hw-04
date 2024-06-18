import css from "./ImageCard.module.css";

const ImageCard = ({alt_description, urls, onClick, likes, tags, description, links}) => {
  return (
    <>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() =>
          onClick({
            alt: alt_description,
            src: urls.regular,
            likes,
            tags,
            description,
            download: links.download,
          })
        }
      />
    </>
  );
};
export default ImageCard;
