import { useState } from "react";
import { SonA } from "./SonA";
import { SonB } from "./SonB";
import { SonC } from "./SonC";


export function Father() {
  const [major, setMajor] = useState(0);
  const [minor, setMinor] = useState(0);
  const [average, setAverage] = useState(0);

  const sendMajor = result => setMajor(result);
  const sendMinor = result => setMinor(result);
  const sendAverage = result => setAverage(result);


  let vector = [5, 8, 1, 9, 3]

  return (
    <>
      <h1>Pai</h1>
      <p>
        Vetor: [ { vector[0] }, { vector[1] }, { vector[2] }, { vector[3] }, { vector[4] } ]
      </p>
      <SonA vector={ vector } send={ sendMajor }/>
      <p>O elemento máximo é { major }</p>
      
      <SonB vector={ vector } send={ sendMinor }/>
      <p>O elemento minimo é { minor }</p>

      <SonC vector={ vector } send={ sendAverage }/>
      <p>O média é { average }</p>


    </>
  )
}