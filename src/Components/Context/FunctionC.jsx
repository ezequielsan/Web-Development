import { useContext } from "react"
import ContextColor from "./MyContext"
import { FunctionD } from "./FunctionD"

export function FunctionC() {

  const {color, color2} = useContext(ContextColor)

  return (
    <div>
      <h1 style={{backgroundColor: color}}>Função C</h1>
      <FunctionD />
    </div>
  )
}