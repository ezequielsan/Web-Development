export function Image({ id }) {
  return (
    <>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} 
        alt="Lumineon" 
        style={{width: "300px"}}
      />
    </>
  ) 
}