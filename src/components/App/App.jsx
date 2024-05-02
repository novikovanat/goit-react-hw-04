import { useEffect, useState } from "react";
import { Hearts } from "react-loader-spinner";
import fetchPhotos from "../JS/fetchPhotos";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import "./App.css";
import toast from "react-hot-toast";

function App() {
  const [response, setResponse] = useState({
    total: 0,
    total_pages: 0,
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage]= useState(null)

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    search(searchTerm, page);
  }, [searchTerm, page]);

  const search = async (searchTerm, page) => {
    try {
      setLoading(true);
      setError("");
      const photosArray = await fetchPhotos(searchTerm, page);
      const { results } = photosArray;
      if (results.length == 0) {
        toast(`We couldn't find anything like ${searchTerm}`);
        return;
      }
      if (page > 1) {
        setResponse((prevResponse) => {
          const { results: prevResults } = prevResponse;
          return { ...prevResponse, results: prevResults.concat(results) };
        });
      } else {
        setResponse(photosArray);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log("response", response, "page:", page);
  return (
    <div>
      <SearchBar onTerm={setSearchTerm} onSearch={search} onReset={setPage} />
      {error !== "" ? (
        <ErrorMessage errorText={error} />
      ) : (
        <div>
          <ImageGallery photosArray={response} onOpen={setModalIsOpen} onItem={setCurrentImage} />
          <ImageModal onClose={setModalIsOpen} modalState={modalIsOpen} response={response}/>
        </div>
      )}
      <Hearts
        height="180"
        width="180"
        color="pink"
        ariaLabel="hearts-loading"
        visible={loading}
      />
      {page < response.total_pages && (
        <LoadMoreBtn
          onUpdate={search}
          setPage={setPage}
          page={page}
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
}

export default App;
