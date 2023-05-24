import axios from "axios"
import { useEffect, useState } from "react"


export const Question03 = () => {
  const [stateMostPopulated, setStateMostPopulated] = useState("")
  const [stateLeastPopulated, setStateLeastPopulated] = useState("")

  useEffect(
    () => {
      axios.get(`https://restcountries.com/v3.1/region/europe?fields=capital,population`)
        .then(
          ({data}) => { // desestruturando response
            let indexMostPopulation = 0, indexLeastPopulation = 0

            // Calculando maior e menos index
            for (let i = 1; i < data.length; i++) {
              if (data[i].population > data[indexMostPopulation].population) indexMostPopulation = i
              if (data[i].population < data[indexLeastPopulation].population) indexLeastPopulation = i           
            }

            // modificando as variaveis de estados com seus respectivos dados
            setStateMostPopulated(data[indexMostPopulation].capital[0])
            setStateLeastPopulated(data[indexLeastPopulation].capital[0])

          }
        )
        .catch(error => alert(error))
    }, 
    []
  )
  
  return (
    <div>
      <h3>Estado com maior população: { stateMostPopulated }</h3>
      <h3>Estado com menor população: { stateLeastPopulated }</h3>
    </div>
  )
}