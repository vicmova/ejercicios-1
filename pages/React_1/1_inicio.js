import React, { useState } from 'react'

export default function ProgramaNotas() {

    const valor_inicial = 0
    const [nota, setNota] = useState(valor_inicial)

    const asignaNota=(event) => {
        const {value} = event.target
        setNota(value)
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
            <p> y esa nota es {(nota>= 5) ? 'Aprobada': 'Suspendida'} </p>

        </div>
    )
}
