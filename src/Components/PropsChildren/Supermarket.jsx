import { Children, cloneElement } from "react";

function Supermarket({ children, name }) {
  return (
    <div>
      <h1>Supermarket { name }</h1>
      {
        Children.map(children, child => {
          if (child.type.name === "Fruit") {
            return (
              <div style={{backgroundColor: "pink"}}>
                { cloneElement(child,{supermarket: name}) }
              </div>
            )
          }
        })
      }
    </div>
  )
}

function Lettuce({ lettuce }) {
  return (
    <p>Legume: { lettuce }</p>
  )
}

function Fruit({ fruit, supermarket }) {
  return (
    <p>Fruit { fruit } of Supermarket { supermarket }</p>
  )
}

function Drink({ drink }) {
  return (
    <p>Drink: { drink }</p>
  )
}

export { Supermarket, Lettuce, Fruit, Drink }