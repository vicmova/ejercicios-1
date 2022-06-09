/*
2) REACT Hooks
a) Completar comprobarNota con las condiciones para ‘Notable’, ‘Sobresaliente’
*/

import React,{useState} from "react"

export default function ProgramaNotas(){

    const valor_inicial = 9;
    const [nota, setNota]=useState(valor_inicial)

    const asignaNota=(event) => {

        const {value}=event.target
        setNota(value)
    }

    const comprobarNota = () => {

        const respuesta = (nota < 5) ? 'Suspendida'
                                     : (nota < 6 && nota > 4) ? 'Aprobada'
                                        : (nota < 7) ? 'Bien'
                                            : (nota > 6 && nota < 9) ? 'Notable'
                                                : 'Sobresaliente'

    return respuesta
                            
    } 
return(
    <div>
        <h2>Comprobador de notas</h2>
            <input
                type='text'
                id='nota'
                onDoubleClick={asignaNota}
            />

            <p> Ahora la nota es: {nota}</p>
            <p>Y esa nota es: {comprobarNota()}</p>
  
                
    </div>
)
    
}

