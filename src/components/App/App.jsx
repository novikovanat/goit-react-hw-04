import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallary from "../ImageGallary/ImageGallary";
import "./App.css";
import testData from "../../assets/testData.json";

function App() {
  const [count, setCount] = useState(0);

  console.log(testData);

  return (
    <div>
      <SearchBar />
      <ImageGallary imageArray={testData} />
    </div>
  );
}

export default App;
