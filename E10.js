/*
10) Inicio REACT.
Realizar programa para empresa de envíos, con datos en constantes.
Constante ‘peso’ = peso de un paquete.
- Si el peso es mayor que 60 , el programa contesta que el precio del envío es 10€
- Si es menor que 60 y mayor que 25, el programa contesta que el precio del envío es 6€
*/

export default function ProgramaTarifa () {
    
    const peso = 76

    function comprobar(dato){
    
        const edad = Number(dato)
    
        const resultado = (peso > 60) ? 10
        : (peso < 60 && peso > 25) ? 6
        : `por favor: consulte otra tarifa.`
    
        return resultado
    }
    
    function textoFinal(valor){
        
        return (`El precio es ${valor}€`);
    }
    
    function inicio(datopeso) {
        
        const precio = comprobar(datopeso)
        const final = textoFinal(precio)
        
        return final
    }
    
    return (
        
        <div>
     
        <h2>Tarifa del envío</h2>
     
        <p>
            {
                inicio(peso)
            }
        </p>
    
    </div>
    );
    }