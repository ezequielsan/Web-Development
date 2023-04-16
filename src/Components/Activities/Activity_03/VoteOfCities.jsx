import { useEffect, useState } from "react";

export function VoteOfCities() {
  
  const [cities, setCities] = useState([
    {name: "Quixada", votos: 0},
    {name: "Fortaleza", votos: 0},
    {name: "Paraipaba", votos: 0},
    {name: "Redencao", votos: 0},
  ])
  const [flag, setFlag] = useState(false)

  const voteCity = name => {
    const index = cities.findIndex(item => item.name === name);
    cities[index].votos += 1;
    
    setFlag(previousFlag => !previousFlag)

    console.log(cities)
  }

  const voteCityV2 = name => {
    /*
    const newCities = cities.map(citie => {
      if (citie.name === name) 
        return { ...citie, votos: citie.votos +1 }
      return { ...citie }
    })
    */
    const newCities = cities.map(citie => {
      if (citie.name === name) 
        citie.votos += 1
      return citie;
    })
    console.log(cities[0].vo)
    setCities(newCities)
  }

  const html = `
  <h3 style={{display: "flex", justifyContent: "space-between"}}>
    Quixada: <span style={{color: "#BA4949"}}>${ cities[0].votos }</span>
  </h3>
  `

  return (
    <div>
      <h1 style={{margin: "4rem 0"}}>Votação de Cidades</h1>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Quixada: <span style={{color: "#BA4949"}}>{ cities[0].votos }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Fortaleza: <span style={{color: "#BA4949"}}>{ cities[1].votos }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Paraipaba: <span style={{color: "#BA4949"}}>{ cities[2].votos }</span>
      </h3>
      <h3 style={{display: "flex", justifyContent: "space-between"}}>
        Redenção: <span style={{color: "#BA4949"}}>{ cities[3].votos }</span>
      </h3>

      <div style={{margin: "3rem 0", display: "flex", justifyContent: "space-between"}}>
        <button onClick={() => voteCityV2("Quixada")}>Votar Quixada</button>
        <button onClick={() => voteCityV2("Fortaleza")}>Votar Fortaleza</button>
        <button onClick={() => voteCityV2("Paraipaba")}>Votar Paraipaba</button>
        <button onClick={() => voteCityV2("Redencao")}>Votar Redenção</button>
      </div>

      <div>
        <h4>Cidade mais votada: <span></span></h4>
        <h4>Cidade menos votada: <span></span></h4>
      </div>
    </div>
  )
}