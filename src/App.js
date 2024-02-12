import { useState } from "react";
import Modal from "./components/Modal";
import Title from "./components/Title";
import Upload from "./components/Upload";
import ImageGrid from "./components/imageGrid";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;