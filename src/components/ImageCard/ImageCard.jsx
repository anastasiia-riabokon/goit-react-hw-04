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
        className="shadow-lg shadow-neutral-400 hover:shadow-slate-500 transition-shadow duration-300 ease-in-out rounded-md cursor-pointer object-cover w-full h-full"
      />
    </>
  );
};
export default ImageCard;
