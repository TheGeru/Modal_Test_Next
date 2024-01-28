"use client";
import { useState } from "react";

const Counter = () =>{
    const [counter, setCounter] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    return(
        <div>
            <p>Haz hecho click {counter} veces </p>
            <button onClick={() => setCounter(counter + 1)}>Haz click</button>
            <br />
            <button onClick={()=> setCounter(0)}>Resetear</button>
            <br />
            <button onClick={()=> setShowMessage(!showMessage)}>{showMessage ? 'Ocultar mensaje' : 'Mostrar mensaje'}</button>
            {
                showMessage && <p>Hola mundo!!</p>
            }
        </div>
    )
}

export default Counter;