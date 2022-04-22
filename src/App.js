import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import "./App.css";
import Images from "./Images";

export function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0][0]);

  const onSubmit = (e) => {
    debugger;
  };

  const validate = (e) => {
    //debugger
  };

  return (
    <div className="w-auto min-h-screen flex bg-slate-800 font-sans">
      <div className="m-auto w-auto max-w-screen-sm pt-8 px-0 pr-0 text-center">

      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-left">
              <li><a>Destinos</a></li>
              <li><a>Precios</a></li>
              <li><a>Tu viaje</a></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a href="http://localhost:3001/" class="btn btn-ghost normal-case text-xl">Turismo ciudad</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

        <blockquote class="text-4xl font-semibold italic text-center text-slate-100 p-8">
          <span>Elige tu próximo </span>
          <span class="relative">
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-indigo-600 to-rose-500 before:bg-rose-700 relative inline-block">
              <span class="relative text-white bg">DESTINO</span>
            </span>
          </span>
        </blockquote>
        <img
          src={selectedImg}
          alt="Selected"
          className="w-auto h-auto mx-0 my-auto rounded-md"
        />
        <div className="w-auto flex justify-between flex-wrap pt-10 px-0 pb-10">
          <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 w-full  justify-items-center">
            {Images.map(([img, name], index) => (
              <figure className="relative cursor-pointer hover:scale-105 duration-300">
                <img
                  className="block w-40 h-28 mx-0 my-0 rounded-md"
                  style={{
                    border: selectedImg === img ? "4px solid lightblue" : "",
                  }}
                  key={index}
                  src={img}
                  alt={name}
                />
                <div
                  className="flex flex-col items-center justify-center absolute rounded-md top-0 left-0 w-full h-full overflow-visible font-small text-xl text-white bg-[#00000099] opacity-0 transition-opacity delay-150 hover:opacity-100 duration-500"
                  onClick={() => setSelectedImg(img)}
                >
                  {name}
                </div>
              </figure>
            ))}
          </div>
        </div>
        <button className="btn m-8 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-rose-500 hover:bg-rose-900 focus:ring focus:ring-rose-900 text-slate-200">
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
                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
                  <div className="flex mb-4 items-center border-b border-rose-400 py-2">
                    <label className="text-rose-500">Nombre</label>
                  </div>
                  <div className="flex x mb-4 items-center border-b border-rose-400 col-span-2">
                    <Field
                      className="w-full appearance-none bg-transparent border-none text-white-600 placeholder:text-slate-700 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      name="firstName"
                      component="input"
                      placeholder="Juan Carlos"
                    />
                  </div>
                  <div className="flex mb-4 items-center border-b border-rose-400 py-2">
                    <label className="text-rose-500">Apellido</label>
                  </div>
                  <div className="flex x mb-4 items-center border-b border-rose-400 col-span-2">
                    <Field
                      className="w-full appearance-none bg-transparent border-none text-white-700 placeholder:text-slate-700 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      name="lastName"
                      component="input"
                      placeholder="Perez"
                    />
                  </div>
                  <div className="flex mb-4 items-center border-b border-rose-400 py-2">
                    <label className="text-rose-500">Correo Electrónico</label>
                  </div>
                  <div className="flex x mb-4 items-center border-b border-rose-400 col-span-2">
                    <Field
                      className="appearance-none bg-transparent border-none text-white-700 placeholder:text-slate-700 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      name="email"
                      component="input"
                      placeholder="juanca@lab9.com"
                    />
                  </div>
                </div>
                <div className="float-right">
                  <button
                    className="btn m-8 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-rose-500 hover:bg-rose-900 focus:ring focus:ring-rose-900 text-slate-200"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          />
        </div>

        <footer class="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
