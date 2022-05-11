import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [selectedImg, setSelectedImg] = useState("https://wallpapercave.com/wp/wp1825728.jpg");
  const destinationsCollectionRef = collection(db, "cities");

  const onSubmit = (e) => {
    debugger;
  };

  const validate = (e) => {
    //debugger
  };

  useEffect(() => {
    const getDestinations = async () => {
      const data = await getDocs(destinationsCollectionRef);
      setDestinations(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getDestinations();
  });

  return (
    <div className="w-auto min-h-screen flex bg-slate-800 font-sans pt-16">
      <div className="m-auto w-auto max-w-screen-sm pt-0 px-0 pr-0 text-center">
        <blockquote class="text-4xl font-semibold italic text-center text-slate-100 p-8 pt-16">
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
            {destinations.map((city, index) => (
              <figure className="relative cursor-pointer hover:scale-105 duration-300">
                <img
                  className="block w-40 h-28 mx-0 my-0 rounded-md"
                  style={{
                    border:
                      selectedImg === city.url ? "4px solid lightblue" : "",
                  }}
                  key={index}
                  src={city.url}
                  alt={city.city}
                />
                <div
                  className="flex flex-col items-center justify-center absolute rounded-md top-0 left-0 w-full h-full overflow-visible text-xl text-white bg-[#00000099] opacity-0 transition-opacity delay-150 hover:opacity-100 duration-500"
                  onClick={() => setSelectedImg(city.url)}
                >
                  {city.city}
                </div>
              </figure>
            ))}
            <NavLink
              className="flex flex-col pb-3 items-center justify-center rounded-md top-0 left-0 w-full h-28 overflow-visible text-6xl hover:scale-105 transition duration-500 ease-in-out text-white bg-[#00000099] opacity-20 delay-150 hover:opacity-60"
              to="/CRUD">
              +
            </NavLink>
          </div>
        </div>

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

        <footer class="footer footer-center p-4 bg-base-100 text-base-content">
          <div>
            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
