/*
import { useState } from "react";

const App = () => {

Ejemplo 1. gestión de fom no controlada, gestión por defecto. 
autoComplete='off' oculta sugerencias del navegador.
Botón activa el evento submit del form que podremos recoger
mediante la propiedad onSubmit={ev=>console.log(ev.target.search.value)}
search=valor del atributo name del input

import { useState } from "react";

const App = () => {

   return(
        <form onSubmit={ev=>
                {ev.preventDefault(); 
                console.log(ev.target.search.value);
                }}>

            <input type='text' name='search'autoComplete='off'></input>
            
            <button type='submit'>Buscar</button>
        </form>
    );
    }

export default App;

*/

/*
Ejemplo 2. Nos interesa almacenar el valor del input dentro del estado. 
Cada vez que hacemos click seteamos (establecemos configuración) el estado. 
En este caso React no es capaz de controlar los valores del input. Sólo reacciona 
a un vente(en este caso, hacer click), no podemos modificar el valor ni leerlo cuando
queramos, dependemos del evento.

import { useState } from "react";

const App = () => {

const [search, setSearch] = useState('');
    return(
        <form onSubmit={ev=>
                {ev.preventDefault();
                //para que search tome el valor del formulario 
                setSearch(ev.target.search.value);
                //console.log(ev.target.search.value);
                }}>

            <input type='text' name='search'autoComplete='off'></input>
            
            <button type='submit'>Buscar</button>
            <p>Resultado: {search}</p>
        </form>
    );
    }
    export default App;
    */

    /*
    Ejemplo 3. Actualizar in utilizar el evento onSubmit.
    Utilizamos la propiedad onChange del input. En este caso
    el acceso es más dinámico a setSearch, accedemos mejor al valor del 
    input, sin embargo, sólo podemos acceder al valor dentro de:
    onChange={ev=>setSearch(ev.target.value)}> No hay relación bilateral
    entre el input y el estado.
    import { useState } from "react";

    const App = () => {
    
    const [search, setSearch] = useState('');

    if(search === 'palabra') setSearch('¿Estás seguro?')

    return(
        <form>
            <input type='text' 
                name='search'
                autoComplete='off' 
                onChange={ev=>setSearch(ev.target.value)}>
            </input>
            
            <button type='submit'>Buscar</button>
            <p>Resultado: {search}</p>
        </form>
    );
    }

    export default App;
    */
    /* 
    Ejemplo 4. Gestión de forma controlada. React controla el valor del input
    a través del estado. Propiedad value del input no cambia, es el valor actual, nunca
    cambia. Podemos setear value mediante una propiedad que si cambia. 
    
    import { useState } from "react";

    const App = () => { 

    const [search, setSearch] = useState('');

    if(search === 'palabra') setSearch('¿Estás seguro?')

    return(
        <form>
            <input type='text' 
                name='search'
                autoComplete='off' 
                //value='Ejemplo no cambia'
                value={search}
                onChange={ev=>setSearch(ev.target.value)}>
            </input>
            
            <button type='submit'>Buscar</button>
            <p>Resultado: {search}</p>
        </form>
    );
}

export default App;
*/

/*
Ejemplo 6 Login con form no controlado.  

const App = () => {

    return(
        <form onSubmit={ev => {
            ev.preventDefault();

            const email = ev.target.email.value;
            const password = ev.target.password.value;

            login(email,password);
        }}>
            <input
                type='text'
                name='email'
                placeholder="Email"
                autoComplete="off"
            ></input>

            <input type='password' name='password' placeholder='Contraseña'></input>
            <button type='submit'>Iniciar sesión</button>
        </form>
    );

};
//función para hacer login

const login = (email, password)=>{

    if(email === 'hola@react.com' && password === '1234')
        
    alert('Bienvenido');

    else alert('Contraseña incorrecta!');
}

export default App;
*/
/*
Ejemplo 7 Login con form controlado. 
*/ 

const App = () => {

    return(
        <form onSubmit={ev => {
            ev.preventDefault();

            const email = ev.target.email.value;
            const password = ev.target.password.value;

            login(email,password);
        }}>
            <input
                type='text'
                name='email'
                placeholder="Email"
                autoComplete="off"
            ></input>

            <input type='password' name='password' placeholder='Contraseña'></input>
            <button type='submit'>Iniciar sesión</button>
        </form>
    );

};
//función para hacer login

const login = (email, password)=>{

    if(email === 'hola@react.com' && password === '1234')
        
    alert('Bienvenido');

    else alert('Contraseña incorrecta!');
}

export default App;