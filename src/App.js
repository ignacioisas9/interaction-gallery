import React, { useState } from "react";
import "./App.css";
import Images from "./Images";

export function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="w-auto min-h-screen bg-slate-800 flex">
      <div className="m-auto w-auto max-w-screen-sm pt-8 py-0 px-0 pr-0">
        <img src={selectedImg} alt="Selected" className="w-auto h-auto mx-0 my-auto rounded-md " />
        <div className="w-auto flex justify-between flex-wrap pt-10 py-0 px-0 pr-0">
          <div className="grid grid-cols-3 gap-4 w-full cursor-pointer justify-items-center">
          {Images.map((img, index) => (
            <img className="w-40 h-28 mx-0 my-0"
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
    </div>
  );
}

export default App;
