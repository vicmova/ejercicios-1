import React,{useState} from "react";

export default function Repaso(){

    const[color,setColor] = useState('fondoAzul');

    const comprobarClick = (e) => {

        const {value} = e.target
        
            const setColor = (value > 3) ? 'fondoRojo' : 'fondoAzul'
                                
        setColor(comprobarClick)
    }


    const[cont, setCont] = useState(0);
        
        //console.log("Clicks desde el button: ", {cont});

    const[cont2, setCont2] = useState(0);
        
        //console.log("Clicks desde el button: ", {cont2});

    const total = (parseInt(cont) + parseInt(cont2));
        

    return(

        <>

        <h1>Repaso!</h1>

    
        <div className={color} >
        
        
            <h3>Has apretado el primer botón: {cont} veces.</h3>
            
                <button onClick={()=> setCont(cont +1)} className="button1"> Botón 1 </button>

            <h3>Has apretado el segundo botón: {cont2} veces.</h3>
            
                <button onClick={()=> setCont2(cont2 +1)} className="button2"> Botón 2 </button>

            <h3>Total clicks: {total} veces.</h3>
            
        

            <style jsx> {`

                    .fondoRojo {
                    background-color: #ff0000;
                    color: white;
                    font-size: 1.2em;
                    font-family: "Lucida Console"
                    }
                
                    .fondoAzul {
                    background-color: #b4c4e0;
                    font-family: "Tahoma"
                    }

                    .button1 {

                        padding: 10px;
                        background-color: white;
                        font-style: roboto;
                        border-radius: 30px;
                        padding-left: 10px;
                        padding-right: 10px
                    
                    }

                    .button2 {

                        padding: 10px;
                        background-color: white;
                        font-style: roboto;
                        border-radius: 30px;
                        padding-left: 10px;
                        padding-right: 10px

                    }
            
                `} </style>
            
                <style jsx global>{`
            
            body {
                    padding: 1em;
                    margin: 0;
                    font-family: -apple-system, Segoe UI, Roboto,sans-serif;
                
                `}</style>

            
        </div>

        </>

    );


}