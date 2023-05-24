import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function CreateProfessor() {
  const [ name, setName ] = useState("");
  const [ course, setCourse ] = useState("");


  function handleNewName(event) {
    setName(event.target.value);
  }

  function handleNewCourse(event) {
    setCourse(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, course);
  }


  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Sign up a new professor
      </Typography>
      
      <Box 
        sx={{maxWidth: "500px"}}
        component="form"
        onSubmit={ handleSubmit }
      >
        <TextField 
          required
          fullWidth
          margin="normal"
          label="Full name"

          id="name"
          name="name"
          onChange={ handleNewName }
        />
        <TextField 
          required
          fullWidth
          margin="normal"
          label="Course"

          id="course"
          name="course"
          onChange={ handleNewCourse }
        />
        <Box>
          <Button 
            variant="contained" 
            sx={{mt: 2}}
            type="submit"
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </>
  )
}