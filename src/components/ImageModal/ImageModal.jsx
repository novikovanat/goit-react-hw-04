import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ onClose, modalState, image }) {
  const {
    description,
    alt_description,
    urls: { regular },
    user: { name, instagram_username },
  } = image;

  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function closeModal() {
    onClose(false);
  }

  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <Modal
        className={css.modal}
        isOpen={modalState}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}

        // style={customStyles}
        contentLabel="Image Modal"
      >
        <div className={css.div}>
          <button onClick={closeModal}>close</button>
          <img
            className={css.largeImage}
            src={regular}
            alt={alt_description}
          ></img>
          <div>
            <p>
              Author: <span>{name}</span>
            </p>
            <a href="">{instagram_username}</a>
          </div>
          <p>{description === null ? alt_description : description}</p>
        </div>
      </Modal>
    </div>
  );
}
