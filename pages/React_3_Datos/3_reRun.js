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
  }, [genero]);  // 3. Re-run this effect when `genero` changes:

  return (
    <ul>
      {usuarios.map((usuario, index)=> (
          <li key={index}>{usuario.gender}:{usuario.name.first}</li>
      ))}
    </ul>
  );
}

export default function Recarga_Datos() {
  const [inputValor, setValue] = useState("female");
  const [genero, setgenero] = useState(inputValor);

  const envioForm = e => {
    e.preventDefault();
    setgenero(inputValor);
  };

  return (
    <>
      <form onSubmit={envioForm}>
        <input
          value={inputValor}
          onChange={e => setValue(e.target.value)}
        />
      </form>

      <LeerUsuarios genero={genero} />

    </>
  );
}


