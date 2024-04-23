// import css from "./SearchBar.module.css";
import fetchPhotos from "../JS/fetchPhotos";
import responseCheck from "../JS/checkStatus";

export default function SearchBar({ setsState: [setPhotos, setLoading] }) {
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
      const fetch = await fetchPhotos(searchPrase);
      const photosArray = await responseCheck(fetch);
      console.log(photosArray);
      const { total, total_pages, results } = photosArray;
      // console.log(results)
      setPhotos(results);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }

    event.target.reset();
  }
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
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
