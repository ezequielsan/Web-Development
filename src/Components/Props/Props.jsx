export function MyProps({ name, age, course }) {

  const titlePage = () => "My Profile"

  return (
    <div>
      <h1 style={ { color: "red",  border: "4px dashed black", 
                    padding: "10px 5px" }}>
        { titlePage() }
      </h1>
      <h2>My name is <span style={{color: "#ccc"}}>{ name }</span>.</h2>
      <h3>My age is <span style={{color: "#ccc"}}>{ age }</span></h3>
      <h4>My course is <span style={{color: "#ccc"}}>{ course }</span></h4>
    </div>
  )
}