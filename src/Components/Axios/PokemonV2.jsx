import axios from "axios"
import { useEffect, useState } from "react"

export function PokemonV2() {
  const [id, setId] = useState(1)
  const [name, setName] = useState("")
  const [image, setImage] = useState({
    front: "",
    back: ""
  })

  useEffect(
    () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
      
          setName(response.data.name)
          setImage({
            front: response.data.sprites.front_default,
            back: response.data.sprites.back_default
          })
        })
        .catch(error => console.log(error))
    },
    [id]
  )

  console.log(id)

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h3>{ name }</h3>
      <div>
        <img src={image.front} alt="Imagem do Pokemon" style={{width: "200px"}}/>
        <img src={image.back} alt="Imagem do Pokemon" style={{width: "200px"}}/>
      </div>

      <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
        <button onClick={ 
          () => { 
            setId(prev => {
              if (prev < 2) return 1;
              return prev - 1
            }) 
          } 
        }>Anterior</button>
        <button onClick={ () => { setId(prev => prev + 1) } }>Próximo</button>
      </div>
      
    </div>
  )
}