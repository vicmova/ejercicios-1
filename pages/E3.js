
//https://ed.team/blog/no-uses-getelementbyid-en-react-usa-las-referencias

//https://es.reactjs.org/docs/faq-functions.html

import React from 'react';

const ValidarEdad = () => {
    
    const tab = '\u00A0';
    const edad = 18;
    let edadUser;
    
    /*let getData = function() {

        //var edadUser = document.getElementById("edad").value;
        this.edad=React.createRef()

        console.log(this.edad);

    }
    
    return(

        
        <div>
            <h2>Validador de edad</h2>

            <Indica tu edad: <input type="text" name="edad" id="edad" placeholder='edad'/>
            <button type="button" onClick="getData()"> Enviar </button>
            
            <p>
                {
                    edad == edadUser ? 'Ok. Acceso permitido.' : 'Acceso no permitido.'
                }
                
            </p>

        </div>
    )
    
    */
    
    return(

        
        <div>
            <h2>Validador de edad</h2>

            <p>

                Tu edad es: {edad}, por lo tanto:{tab}
                {
                    edad >= 18 ? 'Ok. Acceso permitido.' : 'Acceso no permitido.'
                }
                
            </p>

        </div>
    )


}

export default ValidarEdad;