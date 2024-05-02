import Modal from "react-modal";

export default function ImageModal({onClose, modalState, image }) {
  console.log(image)
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
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement("#root");

  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <Modal
        isOpen={modalState}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div>
          <button onClick={closeModal}>close</button>
          <img src="https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2022/05/cats-party-0516221.jpg"></img>
        </div>
      </Modal>
    </div>
  );
}
