import { useState, useEffect } from "react"
import axios from "axios"

export function Pokemon() {
  const [id, setId] = useState(1)
  const [name, setName] = useState("bulbasaur")
  const [frontImage, setFrontImage] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
  const [backImage, setBackImage] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png")

  useEffect(
    () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(
          response => {
            setName(response.data.name)
            setFrontImage(response.data.sprites.front_default)
            setBackImage(response.data.sprites.back_default)
          }
        )
        .catch(error => alert(error))
    }, 
    [id]
  )

  return (
    <>
      <table border="10px">
        <tbody>
          <tr>
            <td colSpan={2} style={{textAlign: "center"}}>Nome: { name }</td>
          </tr>
          <tr>
            <td>
              <img 
                src={ frontImage }
                alt={ name }
                style={{width: "300px"}} 
              />
            </td>
            <td>
              <img 
                src={ backImage }
                alt={ name }
                style={{width: "300px"}} 
              />
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "center"}}>
              <button onClick={() => setId(prev => prev+1)}>Próximo</button>
            </td>
            <td style={{textAlign: "center"}}>
              <button onClick={() => setId(prev => prev-1)}>Anterior</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}