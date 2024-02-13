import React, { useState } from "react";
import Title from "./Title";
import Upload from "./Upload";
import ImageGrid from "./imageGrid";
import Modal from "./Modal";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <Title />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Home;
