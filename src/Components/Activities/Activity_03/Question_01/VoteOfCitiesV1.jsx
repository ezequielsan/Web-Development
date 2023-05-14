import { useEffect, useState } from "react"

export function VoteOfCitiesV1() {
  const [cities, setCities] = useState([
    { name: "Quixada", votes: 0},
    { name: "Fortaleza", votes: 0},
    { name: "Paraipaba", votes: 0},
    { name: "Redencao", votes: 0},
  ])
  const [mostVoted, setMostVoted] = useState("");
  const [leastVoted, setLeastVoted] = useState("");

  const voteCity = name => {
    setCities(
      cities.map(city => {
        if (city.name === name)
          city.votes += 1;
        return city;
    }))
  }

  useEffect(
    () => {
      let max = cities[0].votes, min = cities[0].votes, 
          indexMax = 0, indexMin = 0;

      for (let i = 1; i < cities.length; i++) {
        if (cities[i].votes > max) {
          max = cities[i];
          indexMax = i;

        }
      }

      for (let i = 1; i < cities.length; i++) {
        if (cities[i].votes < min) {
          min = cities[i];
          indexMin = i;
          console.log(indexMin);
        }
      }

      if (indexMin === indexMax) {
        setMostVoted("");
        setLeastVoted("");
      }
      else {
        setMostVoted(cities[indexMax].name);
        setLeastVoted(cities[indexMin].name);
      }


    },
    [cities]
  )

  return (
    <div style={{margin: "0 5rem"}}>
      <h1 style={{margin: "4rem 0"}}>Votação de Cidades</h1>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Quixada: <span style={{color: "#BA4949"}}>{ cities[0].votes }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Fortaleza: <span style={{color: "#BA4949"}}>{ cities[1].votes }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Paraipaba: <span style={{color: "#BA4949"}}>{ cities[2].votes }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Redenção: <span style={{color: "#BA4949"}}>{ cities[3].votes }</span>
      </h3>

      
      <div style={{margin: "3rem 0", display: "flex", justifyContent: "space-between", gap: "1rem"}}>
        <button onClick={() => voteCity("Quixada")}>Votar Quixada</button>
        <button onClick={() => voteCity("Fortaleza")}>Votar Fortaleza</button>
        <button onClick={() => voteCity("Paraipaba")}>Votar Paraipaba</button>
        <button onClick={() => voteCity("Redencao")}>Votar Redenção</button>
      </div>

      <div>
        <h4>Cidade mais votada: <span style={{color: "#BA4949"}}>{ mostVoted }</span></h4>
        <h4>Cidade menos votada: <span style={{color: "#BA4949"}}>{ leastVoted }</span></h4>
      </div>
    </div>
  )
}