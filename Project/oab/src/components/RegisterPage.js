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

function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
    const myStyle={
        backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/449/746/non_2x/colorful-purple-shapes-and-abstract-background-design-in-the-style-of-rounded-shapes-dark-pink-animated-gifs-simple-shapes-soft-edged-linear-generate-ai-free-photo.jpg)",
        height:"150%",
        width:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position:"absolute",
    };

  return (
    <div style={myStyle}>
    <Container component="main" maxWidth="sm">
      <div>
      <Box
        sx={{
          boxShadow: 8,
          borderRadius: 8,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection:"column",
          backgroundColor:"white",
          
        }}
        style={{backgroundImage:"url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",}}
      >
        <Typography component="h4" variant="h4">
          WELCOME!  <b style={{color:"rgb(128, 0, 128)"}}>Sign up</b>
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="uname"
            label="Username"
            name="uname"
            autoComplete="Username"
            autoFocus
          />
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
            id="mobile"
            label="Mobile Number"
            name="mobile"
            autoComplete="mobile"
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="cpassword"
            label="Confirm Password"
            type="cpassword"
            id="cpassword"
            autoComplete="confirm-password"
          />
          <FormControlLabel
            control={<Checkbox value="Terms" color="primary" />}
          />
          I accept the <Link style={{color:"black"}} href ="#">{"Terms of use "}</Link> and <Link style={{color:"black"}} href="#">{" Privacy Policy"}</Link>
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
          <Grid container>
            <Grid item xs textAlign={'centre'}>
            Already have an account?
              <Link style={{color:"black"}}
              component={RouterLink} to="/login">
                 {" Log in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
    </Container>
    </div>
  );
}
export default  RegisterPage;