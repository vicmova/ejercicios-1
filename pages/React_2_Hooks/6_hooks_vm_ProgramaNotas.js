/*6) REACT - Hooks Agregar código para que muestre “NOTABLE” o “SOBRESALIENTE” 
con las notas adecuadas.*/

import React, { useState } from 'react';

const ProgramaNotas = () => {

    const valores_iniciales = {

        nota: 0,

        mensaje:''
}

const [valores, setValores] = useState(valores_iniciales)
const comprobarNota=(e) => {
const {value} = e.target

/*
 const resultado = (edad < 65 && edad > 18) ?  `No es tercera edad.`
                            : (edad > 25 && edad < 65) ? `Adulto adecuado` 
                            :`Menor de edad.`
*/

const texto = (value >= 5 && value < 7) ? `Aprobada`
                : (value >= 7 && value < 9) ? `NOTABLE`
                : (value >= 9) ? `SOBRESALIENTE`
                : `Suspendida`

setValores({
    
    nota: value,
    mensaje: texto

})
}

return (

    <div>
    <h2>¿Aprobada o Supendida?</h2>
    
    <input
        type='text'
        id='nota'
        onClick={comprobarNota}
    />
    
    <p> La nota {valores.nota} está {valores.mensaje}
    </p>
    </div>
    )
}
export default ProgramaNotas