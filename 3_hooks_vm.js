/*
3) REACT - Hooks
Añadir función llamada “creardespedida” y también un botón al siguiente programa, 
para que se DESPIDA del usuario con una frase.
*/

import React, { useState } from 'react'

const ProgramaSaludos = () => {

    const valor_inicial = ''

    const [mensaje, setMensaje] = useState(valor_inicial)

    const [nombre, setNombre] = useState('')

const crearSaludo = e =>{

    const {value} = e.target

    setMensaje(` ${value}, ¿cómo estás ${nombre}?`)
}

const crearDespedida = e =>{

    const {value} = e.target

    setMensaje(` ${value}, ¡Hasta pronto ${nombre}!`)
}

const onChangeHandler = event => {

    setNombre(event.target.value)
}
return (

    <div>
    <h2>Bienvenidas y despedidas oficiales</h2>
    
    <input type='text'
        name= 'campo_nombre'
        value={nombre}
        onChange = {onChangeHandler}
    />

    <button value='Buenos dias'
    onClick={crearSaludo}>Enviar saludo</button>
    

    <button value='Adiós'
    onClick={crearDespedida}>Enviar despedida</button>
    
        <p>
            {mensaje}
        </p>
    </div>
    )
}

export default ProgramaSaludos