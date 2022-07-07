/*10) REACT - Hooks
Añadir código para que, si la edad no es correcta, el fondo sea rojo.*/

import React, { useState } from 'react';

export default function Votacion() {

    const [edad, setEdad] = useState(0)
    const[color,setColor] = useState('')
    const [ver_resultado, setVerResultado] = useState(false)

    const MaquinadeVotar = ({datoedad}) => {

        const validar = (valor) => {

            const validado = (valor === "") ? 'esta vacio'

                    : (valor < 18 || valor > 120) ? "entre 18 y 120"
                    : Number(valor)
                    return (validado)
        }

    const respuesta = validar(datoedad)

    console.log("type", typeof respuesta)

    const final = typeof respuesta =='number'

        ? ` OK. Puedes votar con ${respuesta} años`
        : ` error en datos introducidos: ${respuesta}`
    
        return final
}

//const cambioEstado = event => {
const cambioEstado = (e) => {
    
const {value} = e.target

    setEdad(e.target.value)
    setColor(e.target.value)

    const color_fondo= (value >= 18 && value < 75) ? 'fondoRojo' : '' 
                       
        setColor(color_fondo)
}

return (
        <div>
            <h2>Máquina de votar con css: {color}</h2>

            <div className={color} >

                <input type='number' id='edad' onChange = {cambioEstado}/>
                <button onClick={()=>setVerResultado(true)}>Comprobar</button>
                <button onClick={()=>setVerResultado(false)}>cerrar</button>
                {ver_resultado ? <p><MaquinadeVotar datoedad={edad} /> </p>: false }
                {! ver_resultado ? <p>espera de datos</p>: false}

            </div>
                <style jsx>{`
                        .fondoRojo {
                        background-color: #ff0000;
                        color: white;
                        font-size: 1.2em;
                        font-family: "Lucida Console"
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
 
