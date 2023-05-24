import { Box, Button, Checkbox, Container, Link, TextField, Typography, FormControlLabel } from "@mui/material";

export function Signin() {
  return (
    <Container maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography 
          component="h1" 
          variant="h5"
        >
          Sign in
        </Typography>
        <TextField 
          required
          margin="normal"
          fullWidth
          autoFocus

          label="Email Address"
          id="email"
          name="email"
          type="email"
        />

        <TextField 
          required
          margin="normal"
          fullWidth
          autoFocus

          label="Password"
          id="password"
          name="password"
          type="password"
        />

        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" sx={{
          marginRight: 'auto'
        }}/>

        <Button
          fullWidth
          variant="contained"
          sx={{
            my: "2rem"
          }}
        >
          Sign in
        </Button>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Link href="#" >
            Forgot password
          </Link>
          <Link href="#" >
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Container>
  )
}