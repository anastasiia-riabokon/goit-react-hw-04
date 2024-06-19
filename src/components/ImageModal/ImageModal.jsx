import Modal from "react-modal";
import {IoMdClose} from "react-icons/io";
import {PiHeartFill} from "react-icons/pi";
import {IoPersonCircleOutline} from "react-icons/io5";
import {GoLinkExternal} from "react-icons/go";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.3)",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

const ImageModal = ({isOpen, onClose, photoDetails}) => {
  const {alt, src, likes, tags, description, download, user} = photoDetails;
  const tagsList = tags.map((tag) => ({
    ...tag,
    id: crypto.randomUUID(),
  }));
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="overflow-hidden">
        {photoDetails && (
          <>
            <ul className="flex gap-2 mb-2">
              {tagsList.map((tag) => (
                <li key={tag.id} className="font-poiret font-semibold">
                  <p>#{tag.title}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={onClose}
              className="absolute rounded-full text-slate-600 hover:text-slate-600/80 transition-colors ease-in-out duration-300 p-1  right-0 top-0"
            >
              <IoMdClose size={20} />
            </button>

            <div className="flex  max-md:items-center  max-md:flex-col gap-4">
              <img
                width={380}
                src={src}
                alt={alt}
                className="rounded-xl max-sm:max-w-52 max-md:max-w-80 h-full"
              />

              <div className="p-2">
                <span className="flex flex-wrap items-center gap-3 font-play mb-3">
                  <span className="flex">
                    <IoPersonCircleOutline size={24} color="#475569" />
                    <p>{user.name}</p>
                  </span>

                  <a
                    href={user.links.html}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    @{user.username}
                  </a>
                </span>

                <span className="flex items-center gap-1 mb-3">
                  <PiHeartFill color="red" />
                  <p className="font-poiret font-semibold">{likes}</p>
                </span>

                {description && (
                  <span className="flex flex-col gap-2 font-play mb-3">
                    <p className="font-semibold">Description</p>
                    <p>{description}</p>
                  </span>
                )}

                <a
                  href={download}
                  target="_blank"
                  download="photo.jpg"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-poiret font-semibold"
                >
                  <GoLinkExternal size={18} color="#475569" />
                  Fullscreen
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
export default ImageModal;
