const App = () => {
/*gestión de fom no controlada, gestión por defecto. 
autoComplete='off' oculta sugerencias del navegador
botón activa el vento submit del form que podremos recoger
mediante la propiedad onSubmit={ev=>console.log(ev.target.search.value)}
*/  
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