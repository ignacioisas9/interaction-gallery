import { cities } from "../Images";

export default function CRUD() {
  return (
    <div className="w-auto flex bg-slate-800 font-sans pt-16 justify-center">
      <div className="py-10">
        <div className="m-auto w-2/3 max-w-screen-sm pt-0 px-0 pr-0 text-center">
          <div className="py-10">
            <form id="city-form">
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="city">Ciudad:</label>
                <input className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2" type="text" id="city-name"></input>
                <br />
              </div>
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="country">País:</label>
                <input className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2" type="text" id="country-name"></input>
                <br />
              </div>
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="img">URL de la imagen:</label>
                <input className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2" type="text" id="img"></input>
                <br />
              </div>
              <div className="py-2 overflow-hidden w-auto">
                <label className="float-left" for="attractions">Atracción:</label>
                <input className="float-right rounded-md bg-slate-400 w-80 text-black px-3 py-1 mx-2" type="text" id="attraction-name"></input>
                <br />
              </div>
                <br />
              <button id="btn-save" className="btn btn-success">
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
