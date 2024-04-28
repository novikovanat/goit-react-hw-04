// import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onTerm, onReset }) {
  function submitHandler(event) {
    event.preventDefault();
    onReset({
      total: 0,
      total_pages: 0,
      results: [],
    });
    let input = event.currentTarget.elements.search.value.trim();
    if (input == "") {
      alert("Please enter search term!");
      return;
    }
    onTerm(input);
    onSearch(input);
    event.currentTarget.reset();
  }

  return (
    <header>
      <form onSubmit={submitHandler}>
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
