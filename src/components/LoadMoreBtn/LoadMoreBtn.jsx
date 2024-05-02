export default function LoadMoreBtn({ setPage, page }) {
  const handleLoad = () => {
    setPage(()=>page + 1);
  };

  return <button onClick={() => handleLoad()}>Load More</button>;
}
