/*
11) REACT - Hooks
a) Añadir otra opción más en el menú.

b) Probar diferencias entre display y visibility en las clases

// https://www.w3schools.com/css/css_navbar_vertical.asp
// https://www.w3schools.com/css/css_display_visibility.asp
// https://www.w3schools.com/css/tryit.asp?filename=trycss_display

Displaying the links as block elements 
makes the whole link area clickable (not just the text)

The display property specifies if/how an element is displayed.
*/

import React, { useState } from 'react'

export default function CampoTexto () {

    const valor_inicial = 'home'

    const [fichaActiva, setActiva] = useState(valor_inicial)

    async function pulsaClick(nombre) {

        await setActiva(nombre)
}

function comprueba(ficha) {

    const confirma = (ficha === fichaActiva) ? "activa" : "noactiva"

    return confirma
}

return (

    <div>
        <h3>Ficha ACTIVA: {fichaActiva}</h3>
            <div id="menu">
                <h4>Menu Navigation Bar</h4>
                    <ul>
                        <li onClick={() => pulsaClick("home")}><a href="#home">HOME</a></li>
                        <li onClick={() => pulsaClick("news")}><a href="#news">NEWS</a></li>
                        <li onClick={() => pulsaClick("past_events")}><a href="#past_events">PAST EVENTS</a></li>
                        <li onClick={() => pulsaClick("about")}><a href="#about">ABOUT</a></li>
                    </ul>
            </div>

        <br/><br />
        
        <div id="home" className={ comprueba("home") } >
            <h3>Ficha1</h3>
                <h3>Primera ficha</h3>
                    <img src='https://www.w3schools.com/html/pic_trulli.jpg' alt='ficha1' />
        </div>
            <div id="news" className={ comprueba("news") } >
                <h3>Ficha2</h3>
                    <h3>Segunda ficha</h3>
                        <img src='https://www.w3schools.com/html/img_girl.jpg' alt='ficha2' />
            </div>

            <div id="past_events" className={ comprueba("past_events") } >
                <h3>ficha3</h3>
                    <h3>¿Estás seguro?</h3>
                        <img src='https://fpscinema.files.wordpress.com/2010/10/hellraiser_box.jpg' alt='ficha3' />
            </div>
        
        <div id="about" className={ comprueba("about") } >
            <h3>Ficha4</h3>
                <h3>Cuarta ficha</h3>
                    <img src='https://www.w3schools.com/html/img_chania.jpg' alt='ficha4' />
        </div>

        <style jsx>{`
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    width: 600px;
                    background-color: #f1f1f1;
        }

                li {
                    float: left;
                    
                }
                
                li a {
                    display: inline;
                    color: #000;
                    padding: 8px 16px;
                    text-decoration: none;
                }

                li a:hover {
                    background-color: #555;
                    color: white;
                }

            .activa {
                display: inline;
                }   

            .noactiva {
                display: none;
            }
            
            img:hover {
                border: 2px solid #ddd;
                border-radius: 20px;
                width: auto;
                height: 300px;
               
            }

            `}</style>
    </div>
)
}
