import { useContext } from "react";
import CouterContext from "./MyContext";
import { Grandson } from "./Grandson";

export function Son() {
  const counter = useContext(CouterContext)
  return (
    <div>
      <h4>Son</h4>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter + 3}.png`} alt="" />
      <Grandson />
    </div>
  )
}