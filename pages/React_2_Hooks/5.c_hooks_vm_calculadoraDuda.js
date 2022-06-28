//5.c REACT - Hooks. Añadir más operaciones a la siguiente calculadora
import React, {useState} from "react";

export default function Calculadora() {
    
    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2]= useState(0)
    
    const Calculadora = ({dato1, dato2}) => {
    
        const validar = (valor) =>{
    
        return (valor > 0 && valor <= 10) ? valor: false
    }
    
    const n1 = validar(dato1)
    const n2 = validar(dato2)
    
    const multiplica = n1 * n2
    const divide = n1 / n2
    const suma = parseInt(n1) + parseInt(n2)
    const resta = parseInt(n1) - parseInt(n2)
    
    
    //optimizar con la opción de seleccionar operación. 
    
    
    const resultadoMultiplicar = multiplica ? multiplica : 'introducir números entre 1 y 10'
    const resultadoDividir = divide ? divide : 'introducir números entre 1 y 10'
    const resultadoSumar = suma ? suma : 'introducir números entre 1 y 10'
    const resultadoRestar = resta ? resta : 'introducir números entre 1 y 10'
    
    return (
    
        <div>
            <h4>Resultado de la multiplicación: {resultadoMultiplicar}</h4>
            <h4>Resultado de la división: {resultadoDividir}</h4>
            <h4>Resultado de la suma: {resultadoSumar}</h4>
            <h4>Resultado de la resta: {resultadoRestar}</h4>
        </div>
        
        )
    }

    const onChangeNum1 = event => {
        setnumero1(event.target.value)
    }

    const onChangeNum2 = event => {
        setnumero2(event.target.value)
    }

    return (
        <div>
            <h2>Calculadora no humana</h2>
                <input
                    type='number'
                    id='inputnumero1'
                    onChange = {onChangeNum1}
                />
                
                <input
                    type='number'
                    id='inputnumero2'
                    onChange = {onChangeNum2}
                />
    
    <Calculadora dato1={numero1} dato2={numero2}/>
    
    </div>
    
    )
    }
