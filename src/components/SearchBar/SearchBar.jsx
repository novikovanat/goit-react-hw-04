// import css from "./SearchBar.module.css";

export default function SearchBar({handleSubmit}) {
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
