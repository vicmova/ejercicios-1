/*
5b) Inicio REACT. Crear programa con una constante con el valor de una edad y el
ordenador responde con :
Si la edad es menor que 65, contesta: “No es tercera edad”
Si la edad es mayor que 25 y menor que 65, contesta: “Adulto adecuado”
Si la edad es menor que 18, contesta: “Menor de edad”
*/

export default function ProgramaMayorEdad (){

    const edad = 26

    function comprobar(valor){

        const edad = Number(valor)
        
        /*no tengo claro que esto funcione al 100% No estoy seguro pero creo 
        en el enunciado hay un error o conflicto entre la condición 1 y 2 en los < 65 años*/
        const resultado = (edad < 65 && edad > 18) ?  `No es tercera edad.`
                            : (edad > 25 && edad < 65) ? `Adulto adecuado` 
                            :`Menor de edad.`
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