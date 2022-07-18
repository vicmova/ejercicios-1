/*2) REACT - Datos
a) Añadir más campo en la visualización de los datos leidos en la API de RandomUser

install axios: npm i axios */

import axios from "axios";
import { useState, useEffect } from "react";

function LeerUsuarios({ genero }) {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        async function LeerData() {

            const res = await

            axios.get(`https://randomuser.me/api/?results=10&gender=${genero}`);

            //console.log("res,data",res.data.results)

            setUsuarios(res.data.results)

        }

        LeerData();

    },[]);

    return (

    <ul>

    {usuarios.map((usuario, index)=> (
        <li key={index}><b>Género:</b> {usuario.gender}. <b>Nombre:</b> {usuario.name.first}. <b>Email:</b> {usuario.email}. <b>País:</b> {usuario.location.country}</li>  
    ))}
    </ul>
    );
}

export default function EjercicioDatos2() {
    return <LeerUsuarios genero={'female'} />;
}