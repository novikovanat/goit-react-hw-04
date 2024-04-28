export default function LoadMoreBtn({ onLoad, setPage }) {
  const handleLoad = () => {
    setPage((page) => page + 1);
    onLoad();
  };

  return <button onClick={() => handleLoad()}>Load More</button>;
}
