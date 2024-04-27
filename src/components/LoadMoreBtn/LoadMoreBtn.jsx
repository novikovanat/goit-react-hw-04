import { useState } from "react";

export default function LoadMoreBtn({ onFetch, searchPrase, inputRef }) {
  const [clicks, setClicks] = useState(1);

  const handleLoad = () => {
    setClicks(clicks + 1);
    onFetch(searchPrase);
  };

  return (
    <button onClick={() => console.log(inputRef.current.value)}>Load More</button>
  );
}
