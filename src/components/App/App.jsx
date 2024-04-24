import { useState } from "react";
import { Hearts } from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const isError = error !== "";

  return (
    <div>
      <SearchBar setsState={[setPhotos, setLoading, setError]} />
      {isError ? (
        <ErrorMessage errorText={error} />
      ) : (
        <ImageGallery photosArray={photos} />
      )}
      <Hearts
        height="180"
        width="180"
        color="pink"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading}
      />

      {/* <ImageModal
      isOpen={modalIsOpen}
      onOpen={setModalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      /> */}
    </div>
  );
}

export default App;
