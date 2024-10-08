import React, {useState, useEffect} from 'react'
import "./Footer.css"

let anio=2024;

const Footer = () => {

    let [counter, setCounter]=useState(2);
    let [counter2, setCounter2]=useState(10);


    useEffect(()=>{
        console.log(`Se llamó el Hook porque se actualizó el contador-->",${counter}`);        
    }, [counter]);

    const handlerIncrement=()=>{
        setCounter(counter+1);
        console.log(counter);
        
    }
    const handlerIncrement2=()=>{
        setCounter2(counter2+1);
        console.log(counter2);
        
    }

  return (
    <footer>
        <div>Design by S:P.C.</div>        
        <p>{anio/2}</p>
        <p>Contador {counter}</p>
        <button onClick={handlerIncrement}>Incrementar</button>
        <button onClick={()=>{setCounter(counter-1)}}>Decrementar</button>
        <p>Contador {counter2}</p>
        <button onClick={handlerIncrement2}>Incrementar</button>
        <button onClick={()=>{setCounter2(counter2-1)}}>Decrementar</button>
    </footer>
  )
}

export default Footer