/*
Archivo: fetch.js
Descripción: Este archivo contiene funciones que realizan todo lo de respecto a la manipulacion del api,
como filtrado, ver detalle, listar toda la data 
Autor: Jefri
*/
const API_BASE_URL = 'https://swapi.dev/api';

/*
Función: fetchData
Descripción: Función que realiza una petición GET a una URL dada
Parámetros:
- url.
Valor de retorno: JSON.
*/
export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return null;
  }
};

/*
Función: getPersonDetails
Descripción: Función que realiza una petición GET a una URL dada y devuelve un detalle
Parámetros:
- id.
Valor de retorno: devuelve los detalles de una persona dado su ID como JSON.
*/
export const getPersonDetails = async (id) => {
  const url = `${API_BASE_URL}/people/${id}`;
  const data = await fetchData(url);
  return data;
};
/*
Función: getAllPeople
Descripción: Función que realiza una petición GET a una URL dada y devuelve todas las personas
Parámetros:
- sin parametros.
Valor de retorno: devuelve una lista de todas las personas como JSON.
*/
export const getAllPeople = async () => {
  const url = `${API_BASE_URL}/people/`;
  const data = await fetchData(url);
  return data;
};
/*
Función: getAllPeople
Descripción: Función que realiza una búsqueda de personas por nombre 
Parámetros:
- searchTerm.
Valor de retorno: devuelve resultado como JSON.
*/
export async function fetchPeople(searchTerm) {
  const response = await fetch(`${API_BASE_URL}/people/?search=${searchTerm}`);
  const data = await response.json();
  return data.results;
}
