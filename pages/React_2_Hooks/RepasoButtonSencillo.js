import React,{useState} from "react";

export default function Repaso(){

    const[cont, setCont]=useState(0);
        
        console.log("Clicks desde el button: ", {cont});

    const[cont2, setCont2]=useState(0);
        
        console.log("Clicks desde el button: ", {cont2});

    //suma los clicks del botón1+botón2
    const total= (cont + cont2);
        

    return(

        <div>
        
            <h2>Repaso!</h2>

            <h3>Has apretado el botón: {cont} veces.</h3>
            
            <button onClick={()=> setCont(cont+1)}>Botón 1</button>

            <h3>Has apretado el botón 2: {cont2} veces.</h3>
            
            <button onClick={()=> setCont2(cont2+1)}>Botón 2</button>

            <h3>Total clicks: {total} veces.</h3>
            
        </div>

    );


}
