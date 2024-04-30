import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch, onTerm, onReset }) {
  function submitHandler(event) {
    event.preventDefault();

    let input = event.currentTarget.elements.search.value.trim();
    if (input == "") {
      toast("Please enter search term!");
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
        <Toaster />
        <button
          type="submit"
          onClick={() =>
            onReset({
              total: 0,
              total_pages: 0,
              results: [],
            })
          }
        >
          Search
        </button>
      </form>
    </header>
  );
}
