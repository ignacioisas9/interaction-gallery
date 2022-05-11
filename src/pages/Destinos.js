import { React, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function Destinos() {

  const [destinations, setDestinations] = useState([]);
  const destinationsCollectionRef = collection(db, "cities");

  useEffect(() => {
    const getDestinations = async () => {
      const data = await getDocs(destinationsCollectionRef);
      setDestinations(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getDestinations();
  }, []);

  return (
    <div class="bg-slate-800 w-auto py-24">
      <div class="overflow-x-auto m-auto max-w-screen-md flex">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Ciudad</th>
              <th>País</th>
              <th>Atracciones</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((city, index) => (
              <tr>
                <th>{city.id}</th>
                <td>{city.city}</td>
                <td>{city.country}</td>
                <td>
                  {city.attractions.map((attraction, index) => (
                    <li>{attraction}</li>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
