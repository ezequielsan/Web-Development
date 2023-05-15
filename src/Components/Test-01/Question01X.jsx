import { useState } from "react"
import { Question01Y } from "./Question01Y"

export function Question01X() {
  const [averages, setAverages] = useState([0, 0, 0])

  const students = [
    { name: "Sicrano", scores: { ap1: 8.4, ap2: 5.4 } },
    { name: "Beltrano", scores: { ap1: 6.7, ap2: 3.5 } },
    { name: "Fulano", scores: { ap1: 7.3, ap2: 9.2 } }
  ]

  // função que sera passada para o componente filho e
  // o mesmo retornara as medias calculadas e atualizamos
  // nosso estado com elas.
  const getAverages = medias => {
    setAverages(medias);
  }


  // função que pecorre o array de medias e se a media for
  // maior ou igual a 7, ele retorna um template com as
  // informações de nome e as notas. Caso a media não seja
  // maior ou igual a 7 ele retorna um template vazio.
  const renderStudents = () => {
    return averages.map((average, index) => {
      if (average >= 7)
        return `<p>Nome: ${students[index].name}, AP1: ${students[index].scores.ap1}, AP2: ${students[index].scores.ap2}</p>`
      else return ''
      })
  }

  return (
    <div>
      
      <Question01Y students={ students } getAverages={ getAverages }/>
      { renderStudents() }
    </div>
  )
}