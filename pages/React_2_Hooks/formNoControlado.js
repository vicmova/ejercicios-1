import { useState } from "react";

const App = () => {
/*
Ejemplo 1. gestión de fom no controlada, gestión por defecto. 
autoComplete='off' oculta sugerencias del navegador.
Botón activa el evento submit del form que podremos recoger
mediante la propiedad onSubmit={ev=>console.log(ev.target.search.value)}
search=valor del atributo name del input

   return(
        <form onSubmit={ev=>
                {ev.preventDefault(); 
                console.log(ev.target.search.value);
                }}>

            <input type='text' name='search'autoComplete='off'></input>
            
            <button type='submit'>Buscar</button>
        </form>
    );

*/

/*
Ejemplo 2. Nos interesa almacenar el valor del input dentro del estado. 
Cada vez que hacemos click seteamos (establecemos configuración) el estado. 
En este caso React no es capaz de controlar los valores del input. Sólo reacciona 
a un vente(en este caso, hacer click), no podemos modificar el valor ni leerlo cuando
queramos, dependemos del evento.
*/
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