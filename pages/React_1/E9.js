/* 
9) Inicio REACT. Compara y explica diferencias entre los dos siguientes programas
b) Explicación componentes en el siguiente video: https://youtu.be/mOz5eNcEHu4
*/
//https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render

//1--------------------------------------------------------------------
export default function ProgramaGrados () {
    //declaración constante, igual en ambos, sólo cambia el valor que contiene.
    const temperatura = 100
    
    // esta función para validar el tipo de dato es la misma en ambos. 
    const validar = (dato) => {
    const valor = Number(dato)
    
    return isNaN(valor) ? false: valor
    
}
    //decalaración para calcular grados igual en ambos
    const pasaraFarenheit = (grado) => (grado * 1.8) + 32
    /*esta función inicio recibe dato como parámetro, a diferencia del segundo ejemplo
    const Termometro = ({dato}) al estar entre llaves indica que es código js*/
    const inicio = (dato) => {
    
        const temp = validar(dato)
        /* grados compueba el valor dato de almacenado en temp, si es un valor numérico ejecuta la función 
        pasaraFarenheit que recibe temp como parámetro sino es un valor numérico muestra un mensaje de error*/ 
        const grados = temp ? pasaraFarenheit(temp)
    
                            : 'datos introducidos erróneos'
        
        /*El primer return devuelve un h3 con el valor de const temperatura convertido en grados; al estar entre
          llaves indica que es código js. el return sólo devuelve un dato por eso utilizamos
          un <div>, para el mismo propósito podemos usar <fragent>
        */
        return (
                <div>
                <h3>cálculos realizados</h3>
                    <p> En Farenheit son: {grados} o</p>
                </div>
                )
        /* 
        En el seguno return vemos que se llama a la función inicio que recibe la constante 
        temperatura como parámetro. Comparado con el siguiente código, es diferente porque 
        devuelve un <h3< con texto diferente y el componente <Termometro dato={temperatura} />
        si dejamos el cursor del ratón sobre Temperatura veremos un mensaje que describe: 
                const Termometro: ({ dato }: {
                dato: any;
                }) => JSX.Element

        Termometro es un elemento JSX, tiene una propiedad que es dato de tipo any 
        (puede recibir cualquier valor) y recibe el valor almacenado en la constante 
        temperatura, si pidieramos introducir datos a un supuesto usuario se guardaría 
        en temperatura, en este caso lo declaramos como constante.
        */
    }
        return (
            <div>
            
            <h2>Termómetro digital</h2>
                <p>
                    {
                        inicio(temperatura)
                    }
                </p>
            </div>
    );
    }

    
    //2--------------------------------------------------------------------

    export default function ProgramaGradosComponent () {
        const temperatura = 10
        
        const validar = (dato) =>{
        const valor = Number(dato)
        
        return isNaN(valor) ? false: valor
        
        }

        const pasaraFarenheit = (grado) => (grado * 1.8) + 32
        
        const Termometro = ({dato}) => {
        
            const temp = validar(dato)
        
            const grados = temp ? pasaraFarenheit(temp)
                                : 'datos introducidos erróneos'
        
                return (
                    <div>
                        <h3>cálculos realizados</h3>
        
                             <p> En Farenheit son: {grados} o</p>
        
                    </div>
        
            )
        }

        return (
            <div>
            <h2>Termómetro digital</h2>
                <p>
                 {
                    <Termometro dato={temperatura} />
                 }
                </p>
            </div>
            );
            }
