export function SaveData() {

  const saveDatas = () => {
    const students = [
      {
        matricula: "521431",
        name: "Ezequiel Santos",
        course: "Ciência da Computação"
      },
      {
        matricula: "345678",
        name: "Robson Dias",
        course: "Engenharia de Software"
      }
    ]

    // sessionStorage.setItem(students[0].matricula, JSON.stringify(students[0]));
    localStorage.setItem(students[1].matricula, JSON.stringify(students[1]));
  }

  return (
    <>
      <h1>Salvando dados ...</h1>
      { saveDatas() }
    </>
  )
}

export function LoadData() {
  const loadDatas = () => {
    const student = JSON.parse(localStorage.getItem("345678"));
    return (
      <>
        <h3>Nome: <span>{ student.name }</span></h3>
        <h3>Course: <span>{ student.course }</span></h3>
      </>
    )
  }

  return (
    <>
      <h1>Carregando dados...</h1>
      { loadDatas() }
      <p>Dados Carregados</p>
    </>
  )
}