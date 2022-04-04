import React, { useState } from "react";
import "./App.css";
import Images from "./Images";

export function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
        <div className="img-container">
          {Images.map((img, index) => (
            <img
              style={{ border: selectedImg === img ? "4px solid lightblue" : "" }}
              key={index}
              src={img}
              alt="city"
            onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
