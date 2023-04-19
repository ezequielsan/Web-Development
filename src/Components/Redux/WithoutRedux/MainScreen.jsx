import { useState } from "react";
import { DecrementButton } from "./DecrementButton";
import { Image } from "./Image";
import { IncrementButton } from "./IncrementButton";

export function MainScreen() {
  const [id, setId] = useState(5)

  const increment = () => {
    setId(prev => prev + 1)
  }

  const decrement = () => {
    setId(prev => prev - 1)
  }

  return (
    <>
      <table border="5px">
        <tbody>
          <tr>
            <td colSpan={2}>
              <Image id={id}/>
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "center"}}>
              <IncrementButton increment={ increment } />
            </td>
            <td style={{textAlign: "center"}}>
              <DecrementButton decrement={ decrement }/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}