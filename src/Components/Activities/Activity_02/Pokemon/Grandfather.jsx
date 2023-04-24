import { Son } from "./Son"
import CouterContext from "./MyContext.jsx"

import { useState } from "react";

export function Grandfather () {
  const [ counter, setCounter ] = useState(1)
  
  return (
    <CouterContext.Provider value={counter}>
      <div>
        <h4>Grandafather</h4>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`} alt="" />
        <button onClick={() => setCounter(prev => prev + 1)}>Click</button>
        <Son />
      </div>
    </CouterContext.Provider>
  )
}