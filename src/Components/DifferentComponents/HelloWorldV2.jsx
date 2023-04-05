import "./HelloWorld.css"

/*  
 * Criando uma função usando arrow function
*/
export const HelloWorldV2 = () => {
  return (
    <div className="container">
      <h1>Ezequiel dos Santos Melo</h1>
      <h2>Ciência da Computação</h2>
      <h3>UFC - Campus Quixadá</h3>
      <p>Semestre: {5}°</p>
    </div>
  )
}