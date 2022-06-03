import React from 'react';

export default function ProgramaNotas () {

    const nota = 5

    const comprobarNota = (dato) => {
        const respuesta = (dato >= 5) ? 'Aprobado': 'Suspendido'
        return respuesta
    }
    

    return (
        <div>
            <h2>Comprobador de notas</h2>
            <p>
                {
                    comprobarNota(nota)
                }
            </p>
        </div>
    );
}


