import "./App.css"
// import { Header, Body, Footer } from "./Components/MultiplesComponents/Multiples"
// import { Header as H, Body as B, Footer as F } from "./Components/MultiplesComponents/Multiples"
// import * as Site from "./Components/MultiplesComponents/Multiples"
// import { VoteOfCities } from "./Components/Activities/Activity_03/VoteOfCities"
import { Hero, Enemy, Arena, World } from "./Components/Activities/Activity_01/Battle"

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="Tokyo Dome">
          <Hero name="Baki Hamma" src="https://pbs.twimg.com/media/FozZYrPXoAARXeH.jpg"/>
          <Enemy name="Yujiro Hamma" src="https://i.pinimg.com/564x/c4/e8/6f/c4e86fe47842cbb00ccbda59f80fc3f8.jpg"/>
        </Arena>

        <Arena arena="Underground Arena">
          <Hero name="Baki Hamma" src="https://pbs.twimg.com/media/FozZYrPXoAARXeH.jpg"/>
          <Enemy name="Yujiro Hamma" src="https://i.pinimg.com/564x/c4/e8/6f/c4e86fe47842cbb00ccbda59f80fc3f8.jpg"/>
        </Arena>
      </World>
    </div>
  )
}

export default App
