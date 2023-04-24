import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
  
  const colors = { bkgA:"green", bkgB:"orange", bkgC:"yellow", bkgD:"blue" }
  
  return (
    <ColorTheme.Provider value={ colors }>
      <h1 style={{backgroundColor: colors.bkgA}}>Contexto A</h1>
      <FunctionContextB />
      <FunctionContextC />
    </ColorTheme.Provider>
  )
}

export default FunctionContextA