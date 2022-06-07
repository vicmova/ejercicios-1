//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
import React from 'react';
export default function ProgramaMayor () {

    const numero1 = 80
    const numero2 = 18

    function compruebaMayor(n1, n2){
        
        const resultado = (n1 > n2) ? `el primer número: ${n1} es mayor que el segundo número.`

                                    : (n1 < n2) ?`el segundo número: ${n2} es mayor que ${n1}.`
                                    
                                    : `${n1} y ${n2} contienen el mismo valor, son iguales.`
                                    
                            
        return resultado
     
}
return (
    
    <div>
        <h2>Comprobador de notas</h2>
    <p>
    
    {
        compruebaMayor(numero1, numero2)
    }

</p>

</div>

);

}