const MotherBoard = ({ name, price }) => {
  return (
    <div style={{margin: "2rem 0", padding: ".5rem .5rem", backgroundColor: "#272838", color: "#F9F8F8"}}>
      <p>Nome: { name }</p>
      <p>Preço: R$ {price}</p>
    </div>
  )
}

const Memory = ({ name, price }) => {
  return (
    <div style={{margin: "2rem 0", padding: ".5rem .5rem", backgroundColor: "#272838", color: "#F9F8F8"}}>
      <p>Nome: { name }</p>
      <p>Preço: R$ {price}</p>
    </div>
  )
}

const VideoCard = ({ name, price }) => {
  return (
    <div style={{margin: "2rem 0", padding: ".5rem .5rem", backgroundColor: "#272838", color: "#F9F8F8"}}>
      <p>Nome: { name }</p>
      <p>Preço: R$ {price}</p>
    </div>
  )
}

export { MotherBoard, Memory, VideoCard }
