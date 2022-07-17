//petición 3 datos API Pokemon con Axios

import { useState, useEffect } from "react";
import axios from "axios";

const App = (_) => {
  const [name, setName] = useState([]);
  const[id, setId] = useState([]);
  const[weight, setWeight] = useState([]);


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/raticate`)
      .then((res) => {
        
        console.log(res.data);
            setName(res.data.name);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/raticate`)
      .then((res) => {
            setId(res.data.id);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/raticate`)
      .then((res) => {
            setWeight(res.data.weight);
      })
  }, []);

  return <div><h3>nombre del Pokemon: {name}. Id: {id}. Peso: {weight}.</h3></div>;
  
};
export default App;
