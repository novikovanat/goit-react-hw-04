import { useState, useRef, useEffect } from "react";
import { Hearts } from "react-loader-spinner";
import fetchPhotos from "../JS/fetchPhotos";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const input = useRef();

  useEffect(() => {
    search(page);
  }, [page]);

  async function search(page) {
    if (input.current.value.trim() == "") {
      alert("Please enter search term!");
      return;
    }
    try {
      setLoading(true);
      setPhotos([]);
      setError("");
      const photosArray = await fetchPhotos(input.current.value, page);
      const { total, total_pages, results } = photosArray;
      setPhotos(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <SearchBar onSearch={search} inputRef={input} />
      {error !== "" ? (
        <ErrorMessage errorText={error} />
      ) : (
        <ImageGallery photosArray={photos} />
      )}
      <Hearts
        height="180"
        width="180"
        color="pink"
        ariaLabel="hearts-loading"
        // wrapperStyle={{}}
        // wrapperClass=""
        visible={loading}
      />
      {photos.length !== 0 && (
        <LoadMoreBtn onLoad={search} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
