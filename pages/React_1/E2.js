import React from 'react';

export default function ProgramaNotas() {

    const nota = 5;
    //solución para añadir un espacio;
    //https://es.stackoverflow.com/questions/449636/react-js-a%C3%B1adir-espacio-tabulado
    const tab = '\u00A0';

    const comprobarNota = (dato) => {

        const respuesta = (dato >=5) ? 'Aprobado' : 'Suspendido'

        return respuesta;
    }
return (
    //variación: 
    <div>
        <h2>Comprobador de notas</h2>

        <p> Has obtenido un {nota}, por lo tanto estás:
        
            {tab}{
                
                comprobarNota(nota)
            }
    
</p>

       
    </div>
);

}
/*
 //original: 
<p>
{
comprobarNota(nota)
}
</p>
*/ 