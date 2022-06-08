/*
8) Inicio REACT. 
a) Ejecutar el siguiente código
b) Añadir código para que la validación sea “false” en caso de valor > 100
*/

export default function ProgramaVotacion () {

    const edad = 19

    const validar = (dato) => {

        const valor = Number(dato)
        return isNaN(valor) ? false : valor
    
    }

    //const comprobar = (edad) => edad < 18 ? false : true
    const comprobar = (edad) => edad < 18 || edad > 100 ? false : true

    const inicio = (dato) => {
        const edad = validar(dato)
        const mayor_edad = edad && comprobar(edad)
        const mensaje = mayor_edad ? "Mayor de edad. Puede votar."
                                   : "No puede votar."

    return mensaje
    
    }

return (
    <div>
        <h2>Máquina para votar</h2>
        <p>
            {
                inicio(edad)
            }
        </p>
    </div>
);
}

