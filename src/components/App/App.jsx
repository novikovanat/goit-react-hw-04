import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import "./App.css";

function App() {
  
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  // references are now sync'd and can be accessed.
  // subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div>
      <SearchBar setsState={[setPhotos, setLoading]} />
      <ImageGallery photosArray={photos} />
      <ImageModal
        isOpen={modalIsOpen}
        onOpen={setModalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // contentLabel="Example Modal"
      />
    </div>
  );
}

export default App;
