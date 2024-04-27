// import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch, inputRef }) {
  return (
    <header>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSearch();
        }}
      >
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
