import { Son } from "./Son"

export function Father() {
  return (
    <>
      <h2>Father</h2>
      <Son height={1.7} weight={75}/>
    </>
  )
}