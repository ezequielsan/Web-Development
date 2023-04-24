import { FunctionB } from "./FunctionB"
import { FunctionC } from "./FunctionC"

import ContextColor from "./MyContext"

export function FunctionA() {

  const color = "red"

  return (
    <ContextColor.Provider value={{ color: color, color2: "green", fontSize: "18px", name: "Ezequiel" }}>
      <div>
        <h1 style={{backgroundColor: color}}>Função A</h1>
        <FunctionB />
        <FunctionC />
      </div>
    </ContextColor.Provider>
  )
}