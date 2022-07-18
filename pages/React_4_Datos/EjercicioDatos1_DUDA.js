/*1) REACT - Datos
a) Añadir más campo en la visualización de los datos leidos en la API de reddit
b) Substituir la instrucción fetch, por axios
// https://daveceddia.com/useeffect-hook-examples/*/

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function LeerReddit() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function LeerData() {

            const res = await 
            axios.get(`https://www.reddit.com/r/reactjs.json`);
            
            console.log("res,data",res.data)
            
            setPosts(res.data.results)
            
        }

        LeerData();
    
    }, []);


    return (
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.id}{post.title}</li>
                 ))}
            </ul>
        
    );
}


export default function EjercicioDatos1() {

    return <LeerReddit />;
}
