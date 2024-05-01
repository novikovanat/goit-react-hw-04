export default function LoadMoreBtn({ setPage, onUpdate, searchTerm, page }) {
  const handleLoad = () => {
    setPage(()=>page + 1);
  };

  return <button onClick={() => handleLoad()}>Load More</button>;
}
