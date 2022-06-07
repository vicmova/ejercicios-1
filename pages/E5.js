/*
5b) Inicio REACT. Crear programa con una constante con el valor de una edad y el
ordenador responde con :
Si la edad es menor que 65, contesta: “No es tercera edad”
Si la edad es mayor que 25 y menor que 65, contesta: “Adulto adecuado”
Si la edad es menor que 18, contesta: “Menor de edad”
*/

export default function ProgramaMayorEdad (){

    const edad = 12

    function comprobar(valor){

        const edad = Number(valor)
        
        //no tengo claro que esto funcione al 100%
        const resultado = (edad < 18) ?  `Menor de edad`
                            : (edad > 25 && edad < 65) ? `Adulto adecuado` 
                            :`No es tercera edad.`
        
                                     

        return resultado
    }

    function inicio(dato){

        const mayorEdad = comprobar(dato)
        
        return mayorEdad
    }

    return(
        <div>
            <h2>Programa de admisión</h2>
            <p>
                {
                    inicio(edad)
                }
            </p>
        </div>
    );

}