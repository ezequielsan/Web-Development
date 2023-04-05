import "./MyData.css"

function MyData() {
  
  const titlePage = () => "My Profile"
  const userName = () => "Ezequiel Santos"
  const courseName = () => "Ciência da Computação"
  const universityName = () => "UFC - Campus de Quixadá"

  return (
    <div className="container">
      <h1 className="title">{ titlePage() }</h1>
      <div className="profile">
        <h2>My name is <span className="mark">{ userName() }</span>.</h2>
        <h3>My age is <span className="mark">{ courseName() }</span></h3>
        <h4>My course is <span className="mark">{ universityName() }</span></h4>
      </div>
    </div>
  )
}

export default MyData;