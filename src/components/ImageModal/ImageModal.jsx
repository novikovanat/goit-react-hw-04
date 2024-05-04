import Modal from "react-modal";
import { SiInstagram } from "react-icons/si";
import { RiCloseLargeLine } from "react-icons/ri";

import css from "./ImageModal.module.css";

export default function ImageModal({ onClose, modalState, image }) {
  const {
    description,
    alt_description,
    urls: { regular },
    user: { name, instagram_username },
  } = image;

  Modal.setAppElement("#root");

  const styles ={
    base: 'fade'
  }

  function closeModal() {
    onClose(false);
  }
  let link = `https://www.instagram.com/${instagram_username}`
  return (
    <>
      <Modal 
        className={css.photoOpen}
        isOpen={modalState}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Image Modal"
      >
        <div className={css.div}>
          <button onClick={closeModal}><RiCloseLargeLine /></button>
          <img
            className={css.largeImage}
            src={regular}
            alt={alt_description}
          ></img>
          <div>
            <p>
              Author: <span>{name}</span>
            </p>
            <a href={link}><SiInstagram /></a>
          </div>
          <p>{description === null ? alt_description : description}</p>
        </div>
      </Modal>
    </>
  );
}
