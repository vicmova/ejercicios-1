//https://bluuweb.github.io/react-udemy/03-jsx/#jugando
//agregar y descomentar en el head de index.html:  <!--<button class="bt" role="button">Haz Click!</button>-->
import React, {useState} from "react";

export default function Repaso(){

    const elem=1;

    const[num, setNum] = useState([1]);
    const[time, setTime] = useState(1);


    const incremento = () => {

        setTime(time +1)
        setNum([
                ...num,
                time+1
        ])
    }
    
    //Ejemplo operador de propagción: 
    const arrayUno = ['Rojo', 'Verde']
    const arrayDos = ['Amarillo', 'Azul']

        const Unidos = [...arrayUno, ...arrayDos]
            console.log(Unidos)
    
    

    return(
    
        <div className="repaso">
            <h4>Repaso {elem}. Mostrar contenido del vector mediante la función map()</h4>

            <ul className="ul">
                {
                    num.map((item, index) =>
                        <li key={index}>
                            Posición: {index}. - Valor: {item}.
                        </li>
                    )
                }
            </ul>

            <ul>
                <button className="bt" role="button" onClick={incremento}>Haz click</button>
                
                <p>Tiempo: {time}</p>
                    
                    {
                        num.map((item, index)=>
                        <li key={index}>
                            {index} - {item}
                        </li>
                        )
                    }
            </ul>

            

    <style jsx> {`
        
        .repaso {
            background-color: #aeb1cf;
            font-family: "Tahoma";
            font-size: 25px;
            color: white;
        }

         .ul {
            
            font-family: "Tahoma";
            font-size: 20px;
            color: #3846d6;
        } 

        .bt {

            font-size: 16px;
            font-weight: 200;
            letter-spacing: 1px;
            padding: 13px 20px 13px;
            outline: 0;
            border: 1px solid black;
            cursor: pointer;
            position: relative;
            background-color: rgba(0, 0, 0, 0);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        }
  
        .bt:after {
            content: "";
            background-color: #ffe54c;
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 7px;
            left: 7px;
            transition: 0.2s;
        }
  
        .bt:hover:after {
        top: 0px;
        left: 0px;
        }
  
        @media (min-width: 768px) {
        .button-52 {
        padding: 13px 50px 13px;
        }

    
    `}


    </style>

    </div>
        
    );

}

