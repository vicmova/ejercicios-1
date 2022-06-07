/*
6) Inicio REACT. Cambiar las condiciones de este código para que cumpla los
siguientes requerimientos:
a) Si la edad es mayor o igual a 65 años, el precio del billete es 0€
b) Si la edad es mayor o igual a 18 años, el precio del billete es 1€
c) Los menores de edad no pagan.
*/

export default function ProgramaPrecio () {
    const edad = 10

    function comprobar(dato){
    
        const edad = Number(dato)
    
        const resultado = (edad >= 65) ? 0
    
        : (edad >=18) ? 1
    
        : `Los menores de edad no pagan.`
    
        return resultado
    }
    
    function textoFinal(valor){
        
        return (`El precio es ${valor} euro`);
    }
    
    function inicio(datoedad) {
        
        const precio = comprobar(datoedad)
        const final = textoFinal(precio)
        
        return final
    }
    
    return (
        <div>
     
        <h2>Precio billete autobús</h2>
     
        <p>
            {
                inicio(edad)
            }
        </p>
    
    </div>
    );
    }

