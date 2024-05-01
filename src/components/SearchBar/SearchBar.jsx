import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onTerm, onReset }) {
  function submitHandler(event) {
    event.preventDefault();

    let input = event.currentTarget.elements.search.value.trim();
    if (input == "") {
      toast("Please enter search term!");
      return;
    }

    onTerm(input);
    onReset(1);
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
        <button>Search</button>
      </form>
    </header>
  );
}
