import {useId} from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    padding: "5px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

const ImageModal = ({isOpen, onClose, photoDetails}) => {
  const {alt, src, likes, tags, description, download} = photoDetails;
  const tagsList = tags.map((tag) => ({
    ...tag,
    id: crypto.randomUUID(),
  }));
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div>
        {photoDetails && (
          <>
            <button onClick={onClose}>X</button>
            <img src={src} alt={alt} />
            <div>
              <p>Likes: {likes}</p>
              <ul>
                {tagsList.map((tag) => (
                  <li key={tag.id}>
                    <p>#{tag.title}</p>
                  </li>
                ))}
              </ul>
              <p>{description}</p>
              <a href={download} target="_blank" download="photo.jpg">
                download
              </a>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
export default ImageModal;
