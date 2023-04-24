import ContextColor from "./MyContext"

// Legay mode

export function FunctionD() {
  return (
    <ContextColor.Consumer>
      {
        ({color2}) =>
          <div>
            <h1 style={{backgroundColor: color2}}>Função D</h1>
          </div>
      }
    </ContextColor.Consumer>
  )
}