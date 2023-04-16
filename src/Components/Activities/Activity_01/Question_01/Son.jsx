export function Son({ height, weight }) {
  let IMC = (weight / (height*height)).toFixed(1)
  
  const message = () => {
    if (IMC < 18) 
      return `Abaixo do Peso`
    else if (IMC > 25) 
      return `Acima do Peso`
    else return `Peso Ideal`
  }
  
  return (
    <>
      <h3>Filho</h3>
      <p>Peso: { weight }</p>
      <p>Altura: { height }</p>
      <p>IMC: { IMC }</p>
      <p>{ message() }</p>
      
    </>
  )
}