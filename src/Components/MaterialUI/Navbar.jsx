import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb"
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [ anchorElProfessor, setAnchorElProfessor ] = useState(null)

  function handleOpenAnchorElProfessor(event) {
    setAnchorElProfessor(event.currentTarget);
  }

  function handleCloseAnchorElProfessor(event) {
    setAnchorElProfessor(null)
  }

  function dropProfMenu() {
    return (
      <Box>
        <Button
          sx={{color: 'white', py:1}}
          onClick={ handleOpenAnchorElProfessor }
        >
          Professors
        </Button>

        <Menu
          anchorEl={anchorElProfessor}
          open={Boolean(anchorElProfessor)}
          onClose={ handleCloseAnchorElProfessor }
        >
          <MenuItem 
            onClick={ handleCloseAnchorElProfessor }
            component={ Link }
            to={"createProfessor"}
          >
            Register
          </MenuItem>
          <MenuItem 
            onClick={ handleCloseAnchorElProfessor }
            component={ Link }
            to={"readProfessor"}
          >
            List
          </MenuItem>
        </Menu>
      </Box>
    )
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <AdbIcon sx={{display: {xs:"none", md:"flex"}, mr:1}}/>
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontFamily: 'monospace',
              letterSpacing: '.2em',
              fontWeight: 'bold'
            }}
          >
            CRUD_V0 
          </Typography>

          <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            { dropProfMenu() }

            <Button
              sx={{color: 'white', py:1, ml:2}}
            >
              Students
            </Button>
            <Button
              sx={{color: 'white', py:1, ml:2}}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}