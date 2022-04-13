import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import "./App.css";
import Images from "./Images";

export function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  const onSubmit = (e) => {
    debugger;
  };

  const validate = (e) => {
    //debugger
  };

  return (
    <div className="w-auto min-h-screen flex bg-slate-800 font-sans">
      <div className="m-auto w-auto max-w-screen-sm pt-8 py-4 px-0 pr-0 text-center">
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
                    border: selectedImg === img ? "4px solid lightblue" : "",
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

        <div className="text-left text-3xl text-slate-50">
          <h1 className="py-8">
            Rellena el formulario para estar al tanto de nuestras ofertas:
          </h1>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form class="w-full" onSubmit={handleSubmit}>
                <div className="flex mb-4 items-center border-b border-teal-500 py-2">
                  <label className="text-lime-500">Nombre</label>
                  <Field
                    className="w-full appearance-none bg-transparent border-none text-white-600 placeholder:text-slate-700 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    name="firstName"
                    component="input"
                    placeholder="Miguel Ignacio"
                  />
                </div>
                <div className="flex mb-4 items-center border-b border-teal-500 py-2">
                  <label className="text-lime-500">Apellido</label>
                  <Field
                    className="w-full appearance-none bg-transparent border-none text-white-700 placeholder:text-slate-700 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    name="lastName"
                    component="input"
                    placeholder="Isas"
                  />
                </div>
                <div className=" mb-4 items-center border-b border-teal-500 py-2">
                  <label className=" text-lime-500">Correo electrónico</label>
                  <Field
                    className="appearance-none bg-transparent border-none text-white-700 placeholder:text-slate-700 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    name="email"
                    component="input"
                    placeholder="ignacioisas@lab9.com"
                  />
                </div>
                <div className="float-right">
                  <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                    >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
