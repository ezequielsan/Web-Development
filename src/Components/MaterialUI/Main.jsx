import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Container } from "@mui/material";
import { CreateProfessor } from "./professor/CreateProfessor";
import { UpdateProfessor } from "./professor/UpdateProfessor";
import { ReadProfessor } from "./professor/ReadProfessor";

export function Main() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container sx={{mt: 15, display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2rem  "}}>
        <Routes>
          <Route path="createProfessor" element={< CreateProfessor /> } />
          <Route path="readProfessor" element={ <ReadProfessor /> } />
          <Route path="upadteProfessor" element={ <UpdateProfessor /> } />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}