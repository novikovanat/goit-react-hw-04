import { useState } from "react";

export default function LoadMoreBtn({ onLoad, page, setPage }) {
  const handleLoad = () => {
    setPage((page) => page + 1);
    onLoad()
  };

  return <button onClick={() => handleLoad()}>Load More</button>;
}
