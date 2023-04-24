import ContextColor from "./MyContext"

// Legay mode

export function FunctionB() {
  return (
    <ContextColor.Consumer>
      {
        ({ color, fontSize, name }) => {
          return (
            <div>
              <h1 style={{ backgroundColor: color, fontSize: fontSize }}>Função B de { name }</h1>
            </div>
          )
        }
      }
    </ContextColor.Consumer>
  )
}