/*3) REACT - Datos
a) Reutilizar el siguiente código con otros datos provenientes de alguna de las siguientes APIS:
https://pokeapi.co/
https://developer.marvel.com/*/

import axios from "axios";
import { useState, useEffect } from "react";

function LeerPersonajes({ name }) {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {

        async function LeerData() {

            const res = await

            axios.get(`https://pokeapi.co/api/v2/pokemon`);

            console.log("res,data",res.data)

            setPersonajes(res.data.results)

        }

        LeerData();

    }, [name]); 

return (

    <ul>
        {personajes.map((personaje, index)=> (
            <li key={index}><b>Nombre: </b>{personaje.name}. <b>url: </b> {personaje.url}</li>
        ))}
    </ul>
);
}

export default function Recarga_Datos_2() {
    const [inputValor, setValue] = useState("Nombre");
    const [name, setname] = useState(inputValor);
    const envioForm = e => {
            e.preventDefault();
            setname(inputValor);
};



return (
        <>
        <form onSubmit={envioForm}>
            <input
                value={inputValor}
                onChange={e => setValue(e.target.value)}
            />
        
        </form>
        <LeerPersonajes name={name} />
    </>
);
}