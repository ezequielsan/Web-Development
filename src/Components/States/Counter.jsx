import { useEffect } from "react";
import { useState } from "react";

export function Counter() {
  const [ counter, setCounter ] = useState(0)
  const [ isEven, setIsEven ] = useState(true)

  useEffect(
    () => {
      if (counter % 2 === 0) setIsEven(true)
      else setIsEven(false);
    },
    [ counter ]
  )

  const incrementCounter = () => {
    setCounter(counter + 1)
    
  }

  return (
    <div style={
      { backgroundColor: "#BA4949", padding: "1rem 1rem 2rem 1rem", 
        borderRadius: "6px", color: "white"} }>
      <h1>Counter: <span style={{color: "black"}}>{ counter }</span></h1>
      <p>Is Even: { isEven+"" } </p>
      <button 
        style={
          { outline: "none", cursor: "pointer", padding: "10px 10px", 
            border: "none", borderRadius: "4px", fontWeight: "bold"}}
        onClick={incrementCounter}>
        Counter +1
      </button>
    </div>
  )
}