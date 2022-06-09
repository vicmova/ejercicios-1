import React, { useState } from 'react';

function Ejemplo(){
    
    const [count, setCount] = useState(0);
        console.log("Clicks desde el botón: ", {count});

    return(
        <div>
            <p>Has hecho click {count} veces.</p>
            <button onClick={()=> setCount(count+1)}>Haz click!</button>
        </div>
    )
}

export default Ejemplo;