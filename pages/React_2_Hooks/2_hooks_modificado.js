/* 
gestión formulario controlada. 
Valor del input = controlado por React a través de un estado

falta incluir validar tipo de dato

*/

import { useState } from 'react';

const ProgramaNotas =() => {

    const [nota, setNota] = useState('');

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
        
        <form>
            <h2>Comprobador de calificaciones</h2>
            <input 
                type='text' 
                name='comprueba' 
                autoComplete='off'
                value={nota}
                onChange={ev => setNota(ev.target.value)}></input>
                

            <button type ='submit'>Comprueba tu nota</button>
            <p> Ahora la nota es: {nota}</p>
            <p>Y esa nota es: {comprobarNota()}</p>
        </form>
    );
};

export default ProgramaNotas;

//value='' en el input se refiere al estado actual.
//value={nota} = React gestiona el input nota. 