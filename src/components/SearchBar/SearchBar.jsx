// import css from "./SearchBar.module.css";

import fetchPhotos from "../JS/fetchPhotos";

export default function SearchBar({
  setsState: [setPhotos, setLoading, setError], inputRef
} ) {
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    const searchPrase = event.target.elements.search.value;

    if (searchPrase.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    try {
      setLoading(true);
      setPhotos([]);
      setError("");
      const photosArray = await fetchPhotos(searchPrase);
      const { total, total_pages, results } = photosArray;
      setPhotos(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

  }
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
