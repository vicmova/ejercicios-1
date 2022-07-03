/*
https://stackoverflow.com/questions/46900320/how-do-i-change-the-css-of-
classes-through-react-dynamically*/

import React, { useState } from 'react'

export default function FondoTexto () {

    const[cont, setCont] = useState(0);
    const[cont2, setCont2] = useState(0);

    const [valorColor, setValorColor] = useState('fondoVerde');
    
    const establecerRojo = () => {
    
        setValorColor('fondoRojo')
    }

    const comprobarEdad = (e) => {

        const {value} = e.target

        const color_fondo = (value > 18 && value < 75) ? 'fondoVerde'
                            
                               : (value > 75) ? 'fondoAzul'
                            
                                    : 'fondoRojo'

        setValorColor(color_fondo)

    }

    const total = (parseInt(cont) + parseInt(cont2));

    const comprobarClick = (e) => {

        const {value} = e.target

        const color_click = (value > 3 && value < 10) ? '------------'
                            
                               : (value > 20) ? '---------'
                            
                                    : '---------'

        setValorColor(color_click)

    }


return (

    <div>
        <h2>css aplicado: {valorColor}</h2>
    <div className={valorColor} >

    <h3>Has apretado el primer botón: {cont} veces.</h3>
            
    <button onClick={()=> setCont(cont +1)} className = "button1"> Botón 1 </button>

    <h3>Has apretado el segundo botón: {cont2} veces.</h3>
            
    <button onClick={()=> setCont2(cont2 +1)} className="button2"> Botón 2 </button>

        <h3>Total clicks: {total} veces. Cantidad desde Botón 1 = {cont}, cantidad desde Botón 2 = {cont2}.</h3>
    
    <input  type = 'text'
            id = 'edad'
            name = 'campo_edad'
            onDoubleClick = {comprobarEdad}
            className="input"
    />

    </div>

<style jsx>{`

        .fondoRojo {
            background-color: #ff0000;
            color: white;
            font-size: 1.2em;
            font-family: "Lucida Console"
        }

        .fondoVerde {
            background-color: #008040;
            font-family: "Arial"
        }

        .fondoAzul {
            background-color: #4576d1;
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

        .input {

            padding: 10px;
                background-color: white;
                padding-left: 10px;
                padding-right: 10px

        }

}

`}</style>

<style jsx global>{`
                body {
                    padding: 1em;
                    margin: 0;
                    font-family: -apple-system, Segoe UI, Roboto,sans-serif;
                `}</style>

    </div>
    )
}