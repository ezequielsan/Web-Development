export function SonA({ vector, send }) {
  const maximum = Math.max(...vector)
  return (
    <>
      <h1>Filho A</h1>
      <button onClick={() => send(maximum)}>Maior Elemento</button>
    </>
  )
}