import React,{useState} from 'react';
import './App.css';

//tutorial muy bueno para entender las declaraciones desde 0: 
//https://www.youtube.com/watch?v=PhddxZmnv0Y&list=PLjU2Ord0op_MyDzCJhBjcjW2yTrQSr8sL

function App() {

  const [nombre, setNombre] = useState("Victor Moragues");
  const [id, setId] = useState("000");

  const cambiarNombre=(e)=>{
    
    const value=e.target.value;
    console.log(value);
    
   //setNombre("Cambio");
   setNombre(value);
  }


  const cambiarId=(e)=>{
    const value=e.target.value;
    console.log(value);
    setId(value);
  }

  const guardarClick=()=>{
      console.log("Este es mi estado: ", nombre);
      console.log("Este es mi estado: ", id);
  }
  
  return (

        <div className='App'>
         
            <h2>Formulario</h2>
            <h3>Mira los valores que muestra console.log</h3> 
            <label>Nombre: </label>
            <input id="nombre" name="nombre" value={nombre} onChange={cambiarNombre}></input>
            <label>Id: </label>
            <input id="id" name="id" value={id} onChange={cambiarId}></input>
                    
            <button onClick={guardarClick}>GuardaEstado Nombre</button>
            <button onClick={guardarClick}>GuardaEstado Id</button>
                      

        </div>
  
  );
}

export default App;
