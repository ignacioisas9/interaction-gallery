import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";

export default function CRUD() {
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newURL, setNewURL] = useState("");
  const [newAttractions, setNewAttractions] = useState("");
  const [destinations, setDestinations] = useState([]);
  const destinationsCollectionRef = collection(db, "cities");


  const createDestination = async () => {
    var newId = "8";
    await setDoc(doc(db, "cities", newId), { city: newCity, country: newCountry, url: newURL, attractions: newAttractions.split(",") });
    newId = toString(parseInt(newId) + 1);
    const getDestinations = async () => {
      const data = await getDocs(destinationsCollectionRef);
      setDestinations(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getDestinations();
  };

  useEffect(() => {
    const getDestinations = async () => {
      const data = await getDocs(destinationsCollectionRef);
      setDestinations(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getDestinations();
  }, []);

  return (
    <div className="w-auto flex bg-slate-800 font-sans pt-16 justify-center">
      <div className="py-10">
        <div className="m-auto w-2/3 max-w-screen-sm pt-0 px-0 pr-0 text-center">
          <div className="py-10">
            <form id="city-form">
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="city">
                  Ciudad:
                </label>
                <input
                  className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2"
                  type="text"
                  id="city"
                  onChange={(event) => {
                    setNewCity(event.target.value);
                  }}
                ></input>
                <br />
              </div>
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="country">
                  País:
                </label>
                <input
                  className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2"
                  type="text"
                  id="country"
                  onChange={(event) => {
                    setNewCountry(event.target.value);
                  }}
                ></input>
                <br />
              </div>
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="url">
                  URL de la imagen:
                </label>
                <input
                  className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2"
                  type="text"
                  id="url"
                  onChange={(event) => {
                    setNewURL(event.target.value);
                  }}
                ></input>
                <br />
              </div>
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="attractions">
                  Atracciones:
                </label>
                <input
                  className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2 placeholder:text-gray-600"
                  placeholder="separadas por coma ( , )"
                  type="text"
                  id="attractions"
                  onChange={(event) => {
                    setNewAttractions(event.target.value);
                  }}
                ></input>
                <br />
              </div>
              <br />
              <button onClick={createDestination} id="btn-save" className="btn btn-success" type="button">
                Agregar
              </button>
            </form>
          </div>
        </div>
        <div class="overflow-x-auto py-16">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Ciudad</th>
                <th>País</th>
                <th>Atracciones</th>
                <th>Configuración</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((city) => (
                <tr>
                  <th>{city.id}</th>
                  <td>{city.city}</td>
                  <td>{city.country}</td>
                  <td>
                    {city.attractions.map((attraction) => (
                      <li>{attraction}</li>
                    ))}
                  </td>
                  <td>
                    <button className="btn btn-error">Borrar</button>
                    <button className="btn btn-ghost">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <script type="module" src="./../index.js"></script>
      </div>
    </div>
  );
}