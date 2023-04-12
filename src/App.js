import "./App.css"
// import { Header, Body, Footer } from "./Components/MultiplesComponents/Multiples"
// import { Header as H, Body as B, Footer as F } from "./Components/MultiplesComponents/Multiples"
// import * as Site from "./Components/MultiplesComponents/Multiples"
import { Supermarket, Lettuce, Fruit, Drink } from "./Components/PropsChildren/Supermarket"


function App() {
  return (
    <div className="App">
      <Supermarket name="DuPovão"> 
        <Lettuce lettuce="Cenoura"/>
        <Fruit fruit="Maça"/>
        <Drink drink="Suco"/>
        <Fruit fruit="Abacaxi"/>
      </Supermarket>
    </div>
  )
}

export default App
