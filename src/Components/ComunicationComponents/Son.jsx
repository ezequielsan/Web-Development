export function Son({ message }) {
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={() => message("Hello daddy")}>
        Enviar Mensagem
      </button>
      
    </div>
  )
}