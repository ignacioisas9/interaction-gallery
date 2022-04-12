import React, { useState } from "react";
import "./App.css";
import Images from "./Images";

export function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="w-auto min-h-screen flex bg-slate-800">
      <div className="m-auto w-auto max-w-screen-sm pt-8 py-0 px-0 pr-0 text-center">
        <div className="text-5xl pb-8 font-bold text-slate-50">
          Elige tu próximo destino
        </div>
        <img
          src={selectedImg}
          alt="Selected"
          className="w-auto h-auto mx-0 my-auto rounded-md"
        />
        <div className="w-auto flex justify-between flex-wrap pt-10 px-0 pb-10">
          <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 w-full cursor-pointer justify-items-center">
            {Images.map((img, index) => (
              <figure>
                <img
                  className="w-40 h-28 mx-0 my-0 rounded-md"
                  style={{
                    border: selectedImg === img ? "4px solid lightblue" : ""
                  }}
                  key={index}
                  src={img}
                  alt="city"
                  onClick={() => setSelectedImg(img)}
                />
              </figure>
            ))}
          </div>
        </div>
        <button className="btn m-8 btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Comprar pasajes
        </button>
      </div>
    </div>
  );
}

export default App;