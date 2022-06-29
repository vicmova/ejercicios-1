/*10) REACT - Hooks Añadir código para que, 
si la edad no es correcta, el fondo sea rojo.*/

/*
ver:
https://www.youtube.com/watch?v=PhddxZmnv0Y&list=PLjU2Ord0op_MyDzCJhBjcjW2yTrQSr8sL
*/

import React, { useState } from 'react'

export default function Votacion() {

    const [edad, setEdad] = useState(0)
    const [ver_resultado, setVerResultado] = useState(false)
    const [valorColor, setValorColor] = useState('')

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
                //: ` error en datos introducidos: ${respuesta} ${valorColor}`
            return final
    }

    const cambioEstado = event => {
            
        setEdad(event.target.value)
    }

return (
        
        <div>
     
        <h2>Máquina de votar{valorColor}</h2>

            <div className={valorColor} >
            
                <input type='number' id='edad' onChange = {cambioEstado}/>
                
                <button onClick={()=> setVerResultado(true)}>Comprobar</button>
                <button onClick={()=> setVerResultado(false)}>cerrar</button>
                
                {ver_resultado ? <p><MaquinadeVotar datoedad = {edad} /> </p>: false }
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
    
    );
}