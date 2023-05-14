export function SonB({ vector, send }) {
  const minimum = Math.min(...vector)
  return (
    <>
      <h1>Filho B</h1>
      <button onClick={() => send(minimum)}>Menor Elemento</button>

    </>
  )
}