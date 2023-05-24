import { useState } from "react"

export const Question02 = () => {
  const [image, setImagee] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
  const [control, setControl] = useState(false)
  
  // Essa função verifica a variavel de controle control
  // e dependendo de seu valor ele muda a imagem atual, isto é,
  // ela faz o toggle das imagens  
  const toggleImage = () => {
    if (!control) { // se control falso mostra pokemon de costas e inverte control
      setImagee("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png");
      setControl(true)
    }
    else { // se control verdadeiro mostra pokemon de frente e inverte control
      setImagee("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
      setControl(false)
    }
      
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <img src={ image } alt="Pikachu" style={{width: "200px"}}/>
      <button onClick={() => toggleImage()}>Click-me</button>
    </div>
  )
}