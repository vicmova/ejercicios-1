
import React, { useState } from 'react'

export default function ProgramaNotas() {

    const valor_inicial = 0
    const [nota, setNota] = useState(valor_inicial)

    const asignaNota=(event) => {
        const {value} = event.target
        setNota(value)
    }

    const comprobarNota = () => {
        const respuesta = (nota < 5) ? 'Suspendida'
                                     : (nota < 6) ? 'Aprobada'
                                                  :  (nota < 7) ? 'Bien' 
                                                                : 'otros'
        return respuesta
    }
    
    return (
        <div>
            <h2>Comprobador de notas</h2>
            <input  
              type='text'
              id='nota'
              onDoubleClick={asignaNota}
            />

            <p> La nota es ahora {nota} </p>
            <p> y esa nota es {comprobarNota()} </p>

        </div>
    )
}
