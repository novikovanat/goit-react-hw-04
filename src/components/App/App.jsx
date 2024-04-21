import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./App.css";
import testData from "../../assets/testData.json";

function App() {
  // const [photos, setPhotos] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.search.value);
  }

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <ImageGallery imageArray={testData} />
    </div>
  );
}

export default App;
