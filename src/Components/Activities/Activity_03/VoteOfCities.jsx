import { useEffect, useState } from "react";

export function VoteOfCities() {
  const [counterQuixada,  setCounterQuixada] = useState(0);
  const [counterFortaleza, setCounterFortaleza] = useState(0);
  const [counterParaipaba, setCounterParaipaba] = useState(0);
  const [counterRedencao, setCounterRedencao] = useState(0);

  const [mostVoted, setMostVoted] = useState("")
  const [leastVoted, setLeastVoted] = useState("")

  function incrementCounterQuixada() {
    console.log(this)
    setCounterQuixada(counterQuixada + 1)
  }
    
  const incrementCounterFortaleza = () => {
    setCounterFortaleza(counterFortaleza + 1)
  }

  const incrementCounterParaipaba = () => {
    setCounterParaipaba(counterParaipaba + 1)
  }

  const incrementCounterRedencao = () => {
    setCounterRedencao(counterRedencao + 1)
  }

  const citiesMostVoted = (list) => {

  }

  useEffect(
    () => {
      let cities = [ counterQuixada, counterFortaleza, counterParaipaba, counterRedencao ]
      let nameCities = ["Quixada", "Fortaleza", "Paraipaba", "Redenção"]
      let maior = cities[0]
      let menor = cities[0]
      
      for (let i = 0; i < cities.length; i++) {
        if (cities[i] > maior) maior = cities[i]
        if (cities[i] < menor) menor = cities[i]
      }

      setMostVoted("")
      for (let i = 0; i < cities.length; i++) {
        if (cities[i] == maior) setMostVoted(nameCities[i])
      }

      console.log(maior, menor)
    },
    [ counterQuixada, counterFortaleza, counterParaipaba, counterRedencao ]
  )


  return (
    <div>
      <h1 style={{margin: "4rem 0"}}>Votação de Cidades</h1>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Quixada: <span style={{color: "#BA4949"}}>{ counterQuixada }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Fortaleza: <span style={{color: "#BA4949"}}>{ counterFortaleza }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Paraipaba: <span style={{color: "#BA4949"}}>{ counterParaipaba }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Redenção: <span style={{color: "#BA4949"}}>{ counterRedencao }</span>
      </h3>

      <div style={{margin: "3rem 0", display: "flex", justifyContent: "space-between"}}>
        <button onClick={incrementCounterQuixada}>Votar Quixada</button>
        <button onClick={incrementCounterFortaleza}>Votar Fortaleza</button>
        <button onClick={incrementCounterParaipaba}>Votar Paraipaba</button>
        <button onClick={incrementCounterRedencao}>Votar Redenção</button>
      </div>

      <div>
        <h4>Cidade mais votada: <span>{ mostVoted }</span></h4>
        <h4>Cidade menos votada: <span>{ leastVoted }</span></h4>
      </div>
    </div>
  )
}