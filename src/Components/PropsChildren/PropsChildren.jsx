import { Children } from "react"

export function PropsChildren(props) {
  const children = props.children

  return (
    <div>
      { Children.map(children, (child, i) => {
        if (i < 1) 
          return
        return child
      }) }
    </div>
  )
}