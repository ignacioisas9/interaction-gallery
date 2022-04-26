import React from "react";
import { cities } from "../Images";

export default function Destinos() {
  return (
    <div class="bg-slate-800 w-auto p-8">
      <div class="overflow-x-auto m-auto max-w-screen-sm flex">
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
            {cities.map((city, index) => (
              <tr>
                <th>{city.id}</th>
                <td>{city.city}</td>
                <td>{city.country}</td>
                <td>
                  {city.attractions.map((attraction, index) => (
                    <li>{attraction.name}</li>
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
