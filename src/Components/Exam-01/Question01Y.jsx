import { useEffect } from "react"

export const Question01Y = ({ students, getAverages }) => {
  // função que recebidos duas notas calcula a media
  const average = (score1, score2) => (score1 + score2) / 2

  // nesse trecho de código é calculado a média de cada 
  // estudante e tais medias são passadas de volta para o
  // componente pai  
  useEffect(
    () => {
      const medias = students.map(({ scores: {ap1, ap2} }) => average(ap1, ap2))
      getAverages(medias)
    }
    , []
  )

  return (
    <div>
      <h1>01 - Y</h1>
    </div>
  )
}