import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from 'react-router-dom';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function LoginPage() {
  
  const image={
    backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/449/746/non_2x/colorful-purple-shapes-and-abstract-background-design-in-the-style-of-rounded-shapes-dark-pink-animated-gifs-simple-shapes-soft-edged-linear-generate-ai-free-photo.jpg)",
    height:"120%",
    width:"100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    position:"absolute",
};
const navigate=useNavigate();
  const [name,setName]=useState();
  const [password,setpass]=useState();
  // const [p,setp]=useState();
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  // const navigate=useNavigate()
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission

  try {
    const response = await axios.get('http://localhost:3001/register');
    const user = response.data.find((user) => user.name === name);
   
    if (user) {
      if (user.password === password) {
        alert("login success")
        navigate('/h'); // Redirect to dashboard on successful login
        setError(false)
      } else {
        setSuccess(false);
        setError(true);
      }
    } else {
      setSuccess(false);
      setError(true);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle other errors if needed
  }
  console.log("hi");
};
  return (
    <div style={image}>
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        style={{backgroundImage:"url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg)"}}
      >
        <Typography component="h1" variant="h5">
          <h1><b style={{color:"rgb(128, 0, 128)"}}>Sign In</b></h1>
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <form onSubmit={handleSubmit}>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
      <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"rgb(218, 112, 214)",color:"black"}}
            component={RouterLink} to="/m"
          >
            Sign up
            </Button>
            <p></p>
            <hr></hr>
            or
            <p></p>
            <Button 
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"rgb(218, 112, 214)",color:"black"}}
  
          >
          Sign Up with Google
          </Button>
          <p></p>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{color:"black",marginRight:"110px"}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" style={{color:"black"}} component={RouterLink} to="/registration">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        </Box>
      </Box>
    </Container>
    </div>
  );
}