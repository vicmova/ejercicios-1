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
