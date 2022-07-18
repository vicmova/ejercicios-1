/*4) REACT – Datos useSWR
npm i swr
https://www.npmjs.com/package/swr
https://blog.openreplay.com/beginner-s-guide-to-swr-data-fetching-in-react
https://swr.vercel.app/docs/data-fetching
*/
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

    return (

            <>
                <ul>
                    {data.results.map((usuario, index) => (
                    <li key={index}>
                    {usuario.gender}:{usuario.name.first}

            </li>
                ))}
            </ul>
            </>
    );
}



return (
<>
<form onSubmit={envioForm}>
<input value={inputValor} onChange={(e) => setValue(e.target.value)} />
</form>
<LeerUsuarios genero={"male"} />
</>
);
}