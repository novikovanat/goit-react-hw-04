import { useState } from "react";
import { Hearts } from "react-loader-spinner";
import fetchPhotos from "../JS/fetchPhotos";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import "./App.css";
import toast from "react-hot-toast";

function App() {
  const [photos, setPhotos] = useState({
    total: 0,
    total_pages: 0,
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  

  const search = async (searchTerm, page) => {
    try {
      setLoading(true);
      setError("");
      const photosArray = await fetchPhotos(searchTerm, page);
      const { total, total_pages, results } = photosArray;
      if (results.length == 0) {
        toast(`We couldn't find anything like ${searchTerm}`);
        return;
      }
      setPhotos({
        total,
        total_pages,
        results: [...photos.results.concat(results)],
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <SearchBar onTerm={setSearchTerm} onSearch={search} onReset={setPhotos} />
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
        visible={loading}
      />
      {page < photos.total_pages && (
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
