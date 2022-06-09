/*
1) REACT - Hooks
Añadir condición para que, si la nota es mayor que 6, salga la palabra ‘Notable’
*/

import React,{useState} from 'react';

export default function ProgramaNotas(){

    const valor_inicial = 7
    const [nota, setNota]=useState(valor_inicial)

    const asignaNota=(event) => {

        const {value} = event.target
        setNota(value)

    }

    return (
        <div>
            <h2>Comprobador de notas</h2>
                
                <input 
                    type = 'text'
                    id = 'nota'
                    onDoubleClick={asignaNota}
                />
            <p>Ahora la nota es: {nota}</p>
            
            <p>Y esa nota es {(nota==5) ? 'Aprobada'
                                        : (nota >= 6) ? `Notable` 
                                        : `Suspendida`}</p>

        </div>
    )

}