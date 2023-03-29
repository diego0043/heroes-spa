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

  const getHeroe = async (id) => {
    const url = `https://akabab.github.io/superhero-api/api/id/${id}.json?limit=10&skip=0`;
    const resp = await axios.get(url);
    const newData = resp.data;
    setHeroe(newData);
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
