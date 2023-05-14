import "./App.css"
// import { Header, Body, Footer } from "./Components/MultiplesComponents/Multiples"
// import { Header as H, Body as B, Footer as F } from "./Components/MultiplesComponents/Multiples"
// import * as Site from "./Components/MultiplesComponents/Multiples"
// import { VoteOfCities } from "./Components/Activities/Activity_03/VoteOfCities"
// import { Grandfather } from "./Components/Activities/Activity_02/Pokemon/Grandfather"
import { PokemonV2 } from "./Components/Axios/PokemonV2"

function App() {
  return (
    <div className="App">
      <PokemonV2 />
    </div>
  )
}

export default App
