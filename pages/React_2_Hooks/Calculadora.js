import React, { useState } from 'react'

export default function Calculadora() {

    const [numero1, setnumero1] = useState(0)

    const [numero2, setnumero2]= useState(0)

    const [resultado, setresultado]= useState(0)

    
    const multiplicar = () => {

        const multiplica = numero1 * numero2

        setresultado(multiplica)
    }

    const dividir = () => {

        const divide = numero1 / numero2

        setresultado(divide)
    }

    const sumar = () => {

        const suma = parseInt(numero1) + parseInt(numero2)

        setresultado(suma)
    }

    const restar = () => {

        const resta = numero1 - numero2

        setresultado(resta)
    }

const onChangeNum1 = event => {

    setnumero1(event.target.value)
}

const onChangeNum2 = event => {

    setnumero2(event.target.value)
}

return (

    <div>

    <h2>Máquina de calcular</h2>
    
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

<button onClick={multiplicar}>Multiplica</button>
<button onClick={dividir}>Divide</button>
<button onClick={sumar}>Suma</button>
<button onClick={restar}>resta</button>


{<h3>El resultado es {resultado} </h3>}

</div>

    )
}