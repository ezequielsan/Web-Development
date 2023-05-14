export function SonC({ vector, send }) {
  const avarage = vector.reduce((a, b) => a + b, 0) / vector.length
  return (
    <>
      <h1>Filho C</h1>
      <button onClick={() => send(avarage)}>Média dos Elementos</button>

    </>
  )
}