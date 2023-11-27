import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Stack,styled } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom';

const itemData = [

    {
      img: 'https://automechanica.com/uploads/service_gallery/image/111/thumb_BMW4.jpg',
    },
    {
      img: 'https://automechanica.com/uploads/service_gallery/image/112/thumb_AM-01201.JPG',
    },
    {
      img: 'https://automechanica.com/uploads/service_gallery/image/115/thumb_AM-01195.JPG',
    },
  
  ];
function Logout() {
    const myStyle={
      
      height:"1100px",
      width:"100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position:"absolute",
  };
    const StyledToolbar = styled(Toolbar)({
      display: "flex",
    });
    const SocialBox1= styled(Box)({
      display:"flex",
      color:'white'
    });
  
    return (
      <div>
        
      <div style={myStyle}>
      <AppBar sx={{ background: "rgb(54, 69, 79)" }} position={"static"}>
        <StyledToolbar>
       
        <img style={{height:"100px",width:"100px"}}src="https://automechanica.com/uploads/header/logo/1/AM_White_Logo.svg"></img>
        <p style={{paddingLeft:"80px",fontSize:"30px",fontFamily:"cursive"}}>Thank You!!!</p>
        </StyledToolbar>
      </AppBar>
       
      </div>
      <div>
      <ImageList style={{marginLeft:"50px",width:"1200px",paddingTop:"150px"}} sx={{ width: 500, height: 450 }} cols={3} rowHeight={364}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{height:"400px"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    <div style={{paddingBottom:"80px"}}>
      <Button
            type="submit"
            style={{backgroundColor:"rgb(210, 10, 10)",color:"black"}}
            component={RouterLink} to="/login">
          Sign In
      </Button>
      </div>
      <div>
    <Box sx={{background:'black',height:'490px' }}>
    <Stack direction={{xs:'row',md:'row'}} p={7}>
        <Box flex={1}>
            <img style={{height:"150px",width:"150px"}} src="https://automechanica.com/uploads/header/logo/1/AM_White_Logo.svg"></img>
            <Typography color={'white'} align={'center'}>
              <b style={{color:"rgb(210, 10, 10)"}}>AutoMechanica’s</b> mission is to enable premium quality care for your luxury car service at affordable pricing .
              We ensure real-time updates for complete car care needs with a fair and transparent pricing mechanism.
            </Typography>
        </Box>
        <Box flex={1}>
            <Typography color={'white'} align={'center'}>
                <h3 style={{color:"rgb(210, 10, 10)",paddingLeft:"45px"}}>SERVICES</h3> 
                <ul style={{listStyleType:"none"}}>
                  <li>Periodic Maintenance Service</li>
                  <li>Dent & Paint</li>
                  <li>Bumper Repair</li>
                  <li>Accidental Repair</li>
                  <li>Scratch Removal</li>
                </ul>
            </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={'white'} align={'center'}>
            <h3 style={{color:"rgb(210, 10, 10)",paddingLeft:"35px"}}>LINKS</h3> 
                <ul style={{listStyleType:"none"}}>
                  <li>Home</li>
                  <li>About</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                  <li>AutoMechanica Select</li>
                  <li>Contact US</li>
                  <li>Privacy Policy</li>
                </ul>
          </Typography>
        </Box>
        <Box>
            <Typography color={'#d20a0a'}  align={'left'}>
                <h3>SOCIALS</h3>
                <p></p>
            </Typography>
            <SocialBox1>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}>
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
             </Link>
            </SocialBox1>
        </Box>
      </Stack>
      <Container maxWidth="sm">
        <Typography variant="body2" color="white" align="center">
          {"Copyright © 2023 Automechanica. All rights reserved"}
        </Typography>
      </Container>
    </Box>
</div>
      </div>

  );
}
export default Logout;  