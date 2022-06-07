import React from "react";

const ProgramaNotas = () => {

    const nota = 5;

    return (
        <div>
            <h2>Comprobador de notas</h2>
            <p>
                {
                    nota >= 5 ? 'Aprobado' : 'Suspendido'
                }
            </p>

        </div>
    );
    
}

export default ProgramaNotas;