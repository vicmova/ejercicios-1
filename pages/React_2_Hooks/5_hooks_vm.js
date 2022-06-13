/*Añadir código en la función de inicio que muestre, 
tambien, la suma de los dos números introducidos.*/ 

import React, { useState } from 'react'

export default function Calculadora() {
 
    const [numero1, setnumero1] = useState(0) 
    const [numero2, setnumero2]= useState(0) 
    
    const [resultadomul, setresultadomul]= useState(0)
    const [resultadosum, setresultadosum]= useState(0)  
 
 const iniciar = () => {
    const multiplica = numero1 * numero2
    const suma = parseFloat(numero1) +  parseFloat(numero2)
    
    setresultadomul(multiplica)
    setresultadosum(suma)  
 }

 const onChangeNum1 = event => {
       setnumero1(event.target.value) 
 }

 const onChangeNum2 = event => {
       setnumero2(event.target.value) 
 }

 return ( 
    <div>
        <h2>Máquina de multiplicar y sumar.</h2>
            <input 
                type='text'
                id='num1'
                onChange = {onChangeNum1}
                />
            <input 
                type='text'
                id='num2'
                onChange = {onChangeNum2}
            />

 <button onClick={iniciar}>Calcula</button>
 
    {<h3>El resultado de multiplicar {numero1} por {numero2} es: {resultadomul}. </h3>}
    
    {<h3>El resultado de la sumar {numero1} y {numero2} es: {resultadosum}. </h3>}
 
 </div>
 
 ) 
}
