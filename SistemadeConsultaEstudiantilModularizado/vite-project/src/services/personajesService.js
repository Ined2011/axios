import api from "../api/axios";

export const buscarPorEspecie = async (especie) => {
  try {
    const response = await api.get("/character", {
      params: {
        species: especie,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error al buscar personajes:", error);

    return [];
  }
};