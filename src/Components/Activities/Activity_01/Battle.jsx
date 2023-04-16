import { Children } from 'react'
import './Battle.css'
const Hero = ({ name, src }) => {
  return (
    <div style={{display: "flex", margin: "3rem 0"}}>
      <div>
        <img  width="80px" src={src} alt="Baki Hamma" style={{borderRadius: "50%"}}/>
      </div>
      <h3>{ name }</h3>
    </div>
  )
} 

const Enemy = ({ name, src }) => {
  return (
    <div style={{display: "flex"}}>
      <div>
        <img  width={"80px"} src={src} alt="Yujiro Hamma" style={{borderRadius: "50%"}}/>
      </div>
      <h3>{ name }</h3>
    </div>
  )
}

const Arena = ({ children, arena }) => {
  return (
    <div>
      <h2>{arena}</h2>
      {
        Children.map(children, (child) => {
          return (
            <div style={{border: "1px solid black"}}>
              { child }
            </div>
          )
        })
      }
    </div>
  )
}

const World = (props) => {
  return (
    <div>
      { props.children }
    </div>
  )
}

export { Hero, Enemy, Arena, World }