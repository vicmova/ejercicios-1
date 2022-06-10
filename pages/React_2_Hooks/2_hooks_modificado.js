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
        
        <form onSubmit={ ev =>{
            ev.preventDefault();
            console.log(ev.target.search.value);
             //así toma el valor del formulario
            setNota(ev.target.search.value);
        }}
        
        >
            <h2>Comprobador de calificaciones</h2>
            <input type='text' name='search' autoComplete='off' onDoubleClick={asignaNota}></input>

            <button type ='submit'>Comprueba tu nota</button>
            <p> Ahora la nota es: {nota}</p>
            <p>Y esa nota es: {comprobarNota()}</p>
        </form>
    );
};

export default ProgramaNotas;

/* 
    <input
                type='text'
                id='nota'
                onDoubleClick={asignaNota}
            />
*/