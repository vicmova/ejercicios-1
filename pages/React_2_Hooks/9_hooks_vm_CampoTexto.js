/*9) REACT - Hooks Añadir código, para que, 
si la edad es mayor que 75, el color de fondo sea azul*/

/*https://stackoverflow.com/questions/46900320/how-do-i-change-the-css-of-
classes-through-react-dynamically*/

import React, { useState } from 'react'

export default function CampoTexto () {

    const [valorColor, setValorColor] = useState('fondoVerde')

    /*const establecerRojo = () => {

        setValorColor('fondoRojo')
    }*/

const comprobarEdad = (e) => {
    const {value} = e.target
    
    const color_fondo= (value > 18 && value < 75) ? 'fondoVerde' 
                        : (value > 75) ? 'fondoAzul'
                        : 'fondoRojo'
    
    setValorColor(color_fondo)
}

return (
        <div>
            <h2>css aplicado: {valorColor}</h2>
            <div className={valorColor} >
            <input type='text'
            id='edad'
            name='campo_edad'
            onDoubleClick={comprobarEdad}
        />
        </div>

        <style jsx>{`
                    .fondoRojo {
                    background-color: #ff0000;
                    color: white;
                    font-size: 1.2em;
                    font-family: "Lucida Console"
                    }
                
                    .fondoVerde {
                    background-color: #008040;
                    font-family: "Arial"
                    }

                    .fondoAzul {
                    background-color: #0248c2;
                    font-family: "Tahoma"
                    }
            
                `}</style>
            
                <style jsx global>{`
            
            body {
                    padding: 1em;
                    margin: 0;
                    font-family: -apple-system, Segoe UI, Roboto,sans-serif;
                
                `}</style>
            </div>
    )
}
