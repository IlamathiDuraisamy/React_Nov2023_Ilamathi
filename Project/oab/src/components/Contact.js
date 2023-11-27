import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Stack,styled } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom';


function Contact() {
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
        <p style={{paddingLeft:"80px",fontSize:"30px",fontFamily:"cursive"}}>Contact Us</p>
        </StyledToolbar>
      </AppBar>
       
      </div>
 <div >
 <Box
style={{display:"flex",backgroundColor:"white"}}
sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
   
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"100px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="repair"
        />
        <img style={{width:"60px"}}src="https://thumbs.dreamstime.com/b/black-handset-icon-white-background-vector-illustration-eps-format-phone-icon-black-white-telephone-symbol-vector-132728260.jpg"></img>
      <CardContent>
            
        <Typography variant="body2" color="text.secondary" lineHeight="1">
            <h4>+91-9876543210</h4>
        </Typography>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"100px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="repair"
        />
        <img style={{width:"60px"}}src="https://thumbs.dreamstime.com/b/email-icon-flat-black-round-button-vector-illustration-design-isolated-142987048.jpg"></img>
      <CardContent>
            
        <Typography variant="body2" color="text.secondary" lineHeight="1">
            <h4>automechanicaservice@gmail.com</h4>
        </Typography>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"100px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="repair"
        />
        <img style={{width:"60px"}}src="https://cdn.vectorstock.com/i/preview-1x/47/52/whatsapp-logo-icon-social-media-symbol-vector-26504752.jpg"></img>
      <CardContent>
            
        <Typography variant="body2" color="text.secondary" lineHeight="1">
            <h4>+91-9876543210</h4>
        </Typography>
      </CardContent>
    </Card>
    </Box>
 <Box
style={{display:"flex",backgroundColor:"white"}}
sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
   
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"100px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="repair"
        />
        <img style={{width:"60px"}}src="https://static.vecteezy.com/system/resources/previews/022/257/063/non_2x/icon-media-social-facebook-free-vector.jpg"></img>
      <CardContent>
            
        <Typography variant="body2" color="text.secondary" lineHeight="1">
            <h4>auto_mechanica_service
            </h4>
        </Typography>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"100px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="repair"
        />
        <img style={{width:"60px"}}src="https://static.vecteezy.com/system/resources/thumbnails/032/348/588/small/camera-photography-icon-symbol-image-illustration-of-multimedia-photographic-lens-grapich-design-images-vector.jpg"></img>
      <CardContent>
            
        <Typography variant="body2" color="text.secondary" lineHeight="1">
            <h4>auto_mechanica_service</h4>
        </Typography>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"100px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="repair"
        />
        <img style={{width:"60px"}}src="https://static.vecteezy.com/system/resources/previews/008/385/586/non_2x/twitter-social-media-icon-symbol-design-element-illustration-free-vector.jpg"></img>
      <CardContent>
            
        <Typography variant="body2" color="text.secondary" lineHeight="1">
            <h4>auto_mechanica_service</h4>
        </Typography>
      </CardContent>
    </Card>
    </Box>
 </div>
      <div>
    <Box sx={{background:'black',height:'520px' }}>
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
export default Contact;  