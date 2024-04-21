import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./App.css";
import testData from "../../assets/testData.json";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <SearchBar setsState={[setPhotos, setLoading]} />
      <ImageGallery imageArray={testData} />
    </div>
  );
}

export default App;
