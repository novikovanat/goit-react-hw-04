import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ setPage, page }) {
  const handleLoad = () => {
    setPage(() => page + 1);
  };

  return (
    <button className={css.loadButton} onClick={() => handleLoad()}>
      Load More
    </button>
  );
}
