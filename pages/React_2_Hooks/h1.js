/* 
1) REACT - Hooks
Añadir condición para que, si la nota es mayor que 6, salga la palabra ‘Notable’
*/

import react, {useState} from 'react'

export default function ProgramaNotas(){

    const valor_inicial = 6
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

                <p>La nota ahora es {nota} </p>
                <p> y esa nota es {(nota == 5) ? 'Aprobada' 
                                               : (nota >= 6) ? 'Notable'
                                               : 'Suspendida'}</p>

               
        </div>
    )
}