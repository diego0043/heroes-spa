import axios from "axios";
import { useState } from "react";

export const useHeroe = () => {
  const [data, setData] = useState([]);
  const [heroe, setHeroe] = useState({});
  const [heroes, setHeroes] = useState([]);

  const getData = async () => {
    const url = `https://akabab.github.io/superhero-api/api/all.json?limit=10&skip=0`;
    const resp = await axios.get(url);
    const newData = resp.data;
    setData(newData);
  };

  // ! Falta optimizar para no hacer una nueva petición si ya se tiene el heroe en el state
  const getHeroe = async (name) => {
    const url = `https://superheroapi.com/api/3464617987144506/search/batman`;
    const resp = await axios.get(url);
    const newHeroe = resp.data.results[0];
    setHeroe(...heroe, newHeroe);
  };

  const getHeroes = async (name) => {
    const newHeroes = data.filter((heroe) => heroe.name.includes(name));
    setHeroes(newHeroes);
  };

  const setHeroeActual = (heroe) => {
    setHeroe(heroe);
  };

  const getHeroesByCompany = async (skip) => {
    const url = `https://akabab.github.io/superhero-api/api/all.json?limit=12&skip=${skip}`;
    const resp = await axios.get(url);
    const newData = resp.data;
    setHeroes(newData);
  };

  return {
    getHeroe,
    getHeroes,
    getHeroesByCompany,
    setHeroeActual,
    heroe,
    heroes,
    getData,
    data,
  };
};
