
/* npm i axios */

import axios from "axios";
import { useState, useEffect } from "react";

function LeerUsuarios({ genero }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function LeerData() {
      const res = await axios.get(`https://randomuser.me/api/?results=10&gender=${genero}`);
      console.log("res,data",res.data)
      setUsuarios(res.data.results)
    }
    LeerData();
  },[]); 

  return (
    <ul>
      {usuarios.map((usuario, index)=> (
          <li key={index}>{usuario.gender}:{usuario.name.first}</li>
      ))}
    </ul>
  );
}

export default function EjercicioDatos2() {
  return <LeerUsuarios genero={'female'} />;
}
