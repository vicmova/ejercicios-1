import React,{useState} from 'react';
//referenciar CSS
import './App.css';

//https://www.youtube.com/watch?v=h_5lvemcQds&list=PLjU2Ord0op_MyDzCJhBjcjW2yTrQSr8sL&index=4

function App() {

    const [nombre, setNombre] = useState("");
  
    const cambiarNombre=(e)=>{
      
      const value=e.target.value;
      console.log(value);
    
     setNombre(value);
    }
  
  
    const guardarEstado=()=>{
        console.log("Este es mi estado: ", nombre);
    }


  
  return (

        <div className='form_container'>
            <div className='form_header'>
                <h2 className='form_title'>Formulario</h2>
            
            <div className='form_body'>
                <div className='form_Form'>
                    <label className='form_label: '></label>
                    
                    <input className='form_input'
                        id="nombre"
                        value={nombre}
                        onChange={cambiarNombre}
                    ></input>

                    <button onClick={guardarEstado} className="form_button">Guarda estado</button>
                </div>

            </div>
            <div className='form_footer'>
                <div className='form_group'>
                <span className='form_span'></span>
                    formulario React con CSS

                </div>
            </div>
            </div>

        </div>
  
  );
}

export default App;

///////////////////////////////////File = App.CSS en directorio src


.form_container {
    padding: 20px;
}

.form_header {
  height: 650px;
  
  
}

.form_title {
  color: rgb(200, 197, 197);
  padding-top: 10px;
  padding-left: 5px;
  font-size: 40px;
  text-shadow: 2px 2px 2px black;
}

.form_body {
  background-image: url("800px-Chua's_circuit_with_Chua_diode.png");
  width: 100%;
  height: 650px;
  background-size: cover;
  background-color: rgb(243, 236, 236);
}

.form_form {
  padding: 20px;
  text-align: left;
  display: block;
}

.form_input {
  
  color: rgb(91 88 88);

}

.form_button:hover {
  padding: 10px;
  background-color: black;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white

 
}

.form_footer {

  width: 100%;
  height: 40px;
  background-color: rgb(201, 194, 194);
  position: relative;
  top: 20%;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-shadow: 2px 2px 2px black;

}


