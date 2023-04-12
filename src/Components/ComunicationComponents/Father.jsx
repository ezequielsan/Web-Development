import { Son } from "./Son"

export function Father() {

  const messageOfSon = (mensagem) => {
    alert("Filho Falou: " + mensagem)
  }

  return (
    <>
      <h1>Componente Pai</h1>
      <Son 
        allowance={ 600.00 }
        message={ messageOfSon }
      />
    </>
  )
}