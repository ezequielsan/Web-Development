import { DecrementButton } from "./DecrementButton";
import { IncrementButton } from "./IncrementButton";
import { Image } from "./Image";

export function MainScreen() {
  return (
    <>
      <table border="5px">
        <tbody>
          <tr>
            <td colSpan={2}>
              <Image />
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "center"}}>
              <IncrementButton />
            </td>
            <td style={{textAlign: "center"}}>
              <DecrementButton />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}