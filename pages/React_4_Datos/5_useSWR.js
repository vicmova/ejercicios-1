
import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

export default function Programa_Principal() {
  const [inputValor, setValue] = useState("female");
  const [genero, setgenero] = useState(inputValor);

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const envioForm = (e) => {
    e.preventDefault();
    setgenero(inputValor);
  };

  function LeerUsuarios({ genero }) {
    const { data, error } = useSWR(
      `https://randomuser.me/api/?results=10&gender=${genero}`,
      fetcher
    );

    console.log("datos leidos", data, error);
    if (error) return <div>error leyendo</div>;
    if (!data) return <div>loading...</div>;

    function ListaUsuarios() {
      const lista = data.results;
      const listaformateada = lista.map((element, index) => (
        <div key={index}>
          <div>
            <p>
              {element.gender} y su nombre es {element.name.first}
            </p>
          </div>
        </div>
      ));
      return listaformateada;
    }

    return (
      <div>
        <h2>Listado usuarios</h2>
        {data.results ? <ListaUsuarios /> : <h2>loading ...</h2>}
      </div>
    );
  }

  
  return (
    <>
      <form onSubmit={envioForm}>
        <input value={inputValor} onChange={(e) => setValue(e.target.value)} />
      </form>

      <LeerUsuarios genero={genero} />
    </>
  );
}
