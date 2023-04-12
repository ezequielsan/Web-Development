export function Son({ allowance, message }) {

  return (
    <>
      <h1>Componente Filho</h1>
      <h3>Messada: { allowance }</h3>
      <button 
        onClick={
          () => {
            message("Pão Duro");
          }
        }
      >
        Agradecer Pai
      </button>
    </>
  )
}