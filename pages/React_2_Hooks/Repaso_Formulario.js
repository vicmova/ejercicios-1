//https://bluuweb.github.io/react-udemy/04-formularios/#state

import React,{useState} from 'react';

const   Repaso_Formulario = () => {


    const [objeto, setObjeto] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const[lista, setLista] = useState([]);

    const guardarDatos = (e) => {
        e.preventDefault()
        
        if(!objeto.trim()){
                console.log('esta vacio objeto')
            return
        }
        
        if(!descripcion.trim()){
                console.log('esta vacio descripcion')
            return
        }
        
        console.log('procesando datos...' + objeto + descripcion)

        setLista([
            ...lista,
            {nombreObjeto: objeto, nombreDescripcion: descripcion}
        ])

        e.target.reset()
            setObjeto('')
                setDescripcion('')
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos } >
                <input 
                    type="text"
                    placeholder="Ingrese Objeto"
                    className="form-control mb-2"
                    
                    onChange={ (e) => setObjeto(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese Descripcion"
                    className="form-control mb-2"
                    
                    onChange={ e => setDescripcion(e.target.value) }
                />
                
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
                
                <input type="reset" value="Borrar"></input>

            </form>

            <ul>
    {
        lista.map((item, index) => (
            <li key={index}>
                {item.nombreObjeto} - {item.nombreDescripcion}
            </li>
        ))
    }
</ul>

        </div>
    )
}

export default Repaso_Formulario