/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { buscarPorEspecie } from "../services/personajesService";

function Personajes() {
  const [especie, setEspecie] = useState("Human");
  const [personajes, setPersonajes] = useState([]);

  const cargarPersonajes = async () => {
    const data = await buscarPorEspecie(especie);
    setPersonajes(data);
  };

  useEffect(() => {
    cargarPersonajes();},[especie]);

  return (
    <div>
      <h1>Consulta de Personajes</h1>

      <select
        value={especie}
        onChange={(e) => setEspecie(e.target.value)}
      >
        <option value="Human">Humanos</option>
        <option value="Alien">Aliens</option>
      </select>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {personajes.map((personaje) => (
          <div
            key={personaje.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={personaje.image}
              alt={personaje.name}
              width="100%"
            />

            <h3>{personaje.name}</h3>

            <p>{personaje.species}</p>

            <p>{personaje.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personajes;