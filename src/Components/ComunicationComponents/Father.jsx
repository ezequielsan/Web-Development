import { Son } from "./Son"

export function Father() {
  const messageOfSon = msg => {
    alert("My son said: " + msg);
  } 

  return (
    <div>
      <h1>Pai</h1>
      <Son message={ messageOfSon }/>
    </div>
  )
}