import React, { useState, useEffect } from 'react';

export default function EjemploEffect() {
    const [cuenta, setCuenta] = useState(0);
    //representa el número de veces que cuenta se incrementa cuando hacemos click
    const[step, setStep]=useState(1);

console.log('Render, antes');

    useEffect(() => {
  
    document.title = `Has hecho click: ${cuenta} veces`;
    console.log('useEffect', cuenta);
    //en este array incluiremos los elementos que provocaran el cambio del efecto
    //cundo cambie cuenta se ejecutará el efecto.
     }, [cuenta]);

console.log('Render, después');


    return (
        <div>
             <p>Has apretado el botón {cuenta} veces.</p>
                <button onClick={() => setCuenta(cuenta + step)}>
                    Haz click!
                </button>

            <p>Step: {step}</p>
                <button onClick={() => setStep(step + 1)}>
                    Click step +1!
                </button>

       
    </div>
    );
}