import { useState } from "react";
import { Hearts } from "react-loader-spinner";
import fetchPhotos from "../JS/fetchPhotos";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import "./App.css";

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
  const buttonShown = page < photos.total_pages;

  console.log("photos:", photos, "search term:", searchTerm, "page:", page);

  const search = async (searchTerm, page) => {
    try {
      setLoading(true);
      setError("");
      const photosArray = await fetchPhotos(searchTerm, page);
      const { total, total_pages, results } = photosArray;
      setPhotos({
        total,
        total_pages,
        results: [...photos.results.concat(results)],
      });
      // console.log("photosArray search:", typeof(photos));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log("typeof(photos)", typeof photos);
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
        // wrapperStyle={{}}
        // wrapperClass=""
        visible={loading}
      />
      {buttonShown && (
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
