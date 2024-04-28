export default function LoadMoreBtn({ setPage, onUpdate, searchTerm, page }) {
  const handleLoad = () => {
    setPage(page = page + 1);
    onUpdate(searchTerm, page);
  };

  return <button onClick={() => handleLoad()}>Load More</button>;
}
