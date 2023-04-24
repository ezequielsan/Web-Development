import { useContext } from "react"
import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"

const FunctionContextC = () => {
  const {bkgC} = useContext(ColorTheme) 
  return (
    <div>
      <h1 style={{ backgroundColor: bkgC }}>
        Contexto C
      </h1>
      <FunctionContextD />
    </div>
  )
}

export default FunctionContextC