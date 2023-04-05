import "./HelloWorld.css"

/*  
 * Criando uma função usando palavra-chave function
*/
export function HelloWorld() {
  let semester = 5;
  return (
    <div className="container">
      <h1>Ezequiel dos Santos Melo</h1>
      <h2>Ciência da Computação</h2>
      <h3>UFC - Campus Quixadá</h3>
      <p>Semestre: {semester}°</p>
    </div>
  )
}

