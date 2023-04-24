import { useContext } from "react"
import CouterContext from "./MyContext"

export function Grandson() {
  const counter = useContext(CouterContext)
  return (
    <div>
      <h4>Grandson</h4> 
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter + 6}.png`} alt="" />
    </div>
  )
}