import  { FunctionB } from  './FunctionB'

export function FunctionA({ numberX }) {
  return (
    <div>
      <h3>Componente A</h3>
      <FunctionB x={numberX} y={10}/>
      <FunctionB x={numberX} y={34}/>
      <FunctionB x={numberX} y={11}/>
    </div>
  )
}