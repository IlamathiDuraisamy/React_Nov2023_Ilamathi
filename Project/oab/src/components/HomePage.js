import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from "@mui/material/Link";
import { Stack,styled } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link as RouterLink } from 'react-router-dom';


const itemData = [

  {
    img: 'https://www.shutterstock.com/image-photo/woman-washing-her-car-selfservice-600nw-1861269733.jpg',
  },
  {
    img: 'https://us.123rf.com/450wm/ufabizphoto/ufabizphoto1712/ufabizphoto171200867/91095569-car-detailing-man-with-orbital-polisher-in-auto-repair-shop-selective-focus.jpg?ver=6',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/99/07/46/360_F_399074657_loaqOP2W1hjvTsNIx3qY3PWK5xvoPTd0.jpg',
  },

];

function HomePage() {
  const myStyle={
    
    height:"1100px",
    width:"100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position:"absolute",
};


  
const SocialBox1= styled(Box)({
  display:"flex",
  color:'white'
});
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
  });


  return (
    <div>
      
    <div style={myStyle}>
    <AppBar sx={{ background: "rgb(54, 69, 79)" }} position={"static"}>
      <StyledToolbar>
     
      <img style={{height:"100px",width:"100px"}}src="https://automechanica.com/uploads/header/logo/1/AM_White_Logo.svg"></img>
      <Button 
            type="submit"
            style={{color:"white",paddingLeft:"50px"}}
            component={RouterLink} to="/m">

          Home
          </Button>
      <Button 
            type="submit"
            style={{color:"white"}}
            component={RouterLink} to="/about"
          >
          About
          </Button>
      <Button 
            type="submit"
            style={{color:"White"}}
            component={RouterLink} to="/service"
          >
          Services
          </Button>
      <Button 
            type="submit"
            style={{color:"White"}}
            component={RouterLink} to="/contact"
          >
          Contact
          </Button>
      <Button 
            type="submit"
            style={{color:"White"}}
            component={RouterLink} to="/logout">
          
          Logout
          </Button>
      </StyledToolbar>
    </AppBar>
     
  


   <h1 style={{fontFamily:"cursive"}}><b style={{color:"rgb(210, 10, 10)"}}>AutoMechanic </b><b>Auto Services</b></h1>
   
      <h1 style={{color:"black",fontFamily:"cursive"}}>Your destination for trusted car services and repair</h1>
   
    
    
    
    <ImageList style={{marginLeft:"50px",width:"1200px"}} sx={{ width: 500, height: 450 }} cols={3} rowHeight={364}>
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
      <h1><b style={{color:"rgb(210, 10, 10)"}}>OUR</b><b style={{color:"grey"}}> CAR SERVICES</b> <b style={{color:"rgb(210, 10, 10)"}}>INCLUDES</b></h1>



    <div style={{backgroundColor:"rgb(54, 69, 79)",height:"500px"}}>
      <h3><p></p></h3>
    <Box
style={{display:"flex",backgroundColor:"rgb(54, 69, 79)"}}
sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
   
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"50px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="repair"
        />
        <img style={{width:"60px"}}src="https://resources.servicemycar.com/upimages/service-content/Car-Repair-20230622044255.webp"></img>
      <CardContent>
      <Link style={{textDecoration:"none",color:"rgb(210, 10, 10)"}} href="#">{"Car Repair"}</Link>
            
        <Typography variant="body2" color="text.secondary" lineHeight="0.5">
            <h4>Mechanical repairs</h4>
            <h4>Electrical repairs</h4>
            <h4>360-degree health check</h4>
            <h4>diagnostics</h4>
        </Typography>
      </CardContent>
    </Card>
    
    
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"50px"}}>
      <CardMedia
        sx={{height: 50,width:300 }}
        title="wash"
        />
        <img style={{width:"60px"}}src="https://resources.servicemycar.com/upimages/service-content/car-wash-abudhabi-20210905040126.webp"></img>
      <CardContent>
      <Link style={{textDecoration:"none",color:"rgb(210, 10, 10)"}} href="#">{"Car Wash"}</Link>
            
        <Typography variant="body2" color="text.secondary" lineHeight="0.5">
            <h4>Exterior cleaning</h4>
            <h4>Interior vacuuming</h4>
            <h4>Tire dressing</h4>
            <h4>Waxing or Polishing</h4>
        </Typography>
      </CardContent>
    </Card>

    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"80px",marginTop:"50px"}}>
      <CardMedia
        sx={{ height: 50,width:300}}
        title="Service"
        />
        <img style={{width:"60px"}}src="https://resources.servicemycar.com/upimages/service-content/car-service-dubai-20201108094357.webp"></img>
      <CardContent>
      <Link style={{textDecoration:"none",color:"rgb(210, 10, 10)"}} href="#">{"Car Service"}</Link>
            
        <Typography variant="body2" color="text.secondary" lineHeight="0.5">
            <h4>Basic service</h4>
            <h4>Full service</h4>
            <h4>Major service</h4>
            <h4>Free pickup and delivery</h4>
        </Typography>
      </CardContent>
    </Card>
    </Box>
    <div>
      <p></p>
      <Button
            type="submit"
            style={{backgroundColor:"rgb(210, 10, 10)",color:"black"}}
            component={RouterLink} to="/booking">
          Get a Qoute
      </Button>
      <p></p>
      <Button
            type="submit"
            style={{backgroundColor:"rgb(210, 10, 10)",color:"black"}}
            component={RouterLink} to="/contact">
          Request A Callback
      </Button>
    </div>
      </div>
  <div style={{backgroundColor:"black",height:"400px"}}>
  <p></p>
  <h1><p></p></h1>
  <b style={{fontSize:"40px",color:"white"}}>Brands We Serve </b>
  <p></p>
  <h1><p></p></h1>
  <h1><p></p></h1>

  <div>
     <Box style={{display:"flex"}}>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/1/BMW-_New.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/3/Audi.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/5/Hyundai.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/7/Honda.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/9/LandRover.png"></img>
      <p></p>
     </Box>
  </div>
  <p></p>
  <div>
     <Box style={{display:"flex"}}>
      <p></p>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/11/Mercedes.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/13/Nissan_Old.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/15/Skoda_New.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/16/toyota.png"></img>
      <img style={{paddingLeft:"100px",height:"120px",width:"120px"}} src="https://automechanica.com/uploads/client/logo/17/Volkswagen_New.png"></img>
     </Box>
  </div>
  <p></p>
  <h1><p></p></h1>
</div>
<div style={{backgroundColor:"rgb(54, 69, 79)",height:"450px"}}>
  <p></p>
  <h1><p></p></h1>
  <h1 style={{color:"white",fontFamily:"serif"}}> HOW WE WORK!</h1>
  <Box
    style={{display:"flex"}}
    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
   
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"160px"}}>
      <CardMedia
        sx={{ height: 50,width:200}}
        />
        <img style={{width:"60px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIe9dAcHwEYVFQAdxH_mBPQTYfpbc6OkF8__H4FG4E75Vs189LOQp4GNgMzpMni2Nee4&usqp=CAU"></img>
      <CardContent>
            
        <h4>Book In Minutes</h4>
        <Typography variant="body2" color="text.secondary" lineHeight="0.5">
          <p>Enter car Details</p>
          <p>Choose your Service</p>
          <p>See final price Upfront</p>
        </Typography>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"40px"}}>
      <CardMedia
        sx={{ height: 50,width:200}}
        />
        <img style={{width:"60px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxrjTaSNa9rYKdv6uu2Cn-kCMrJ4isIG6fqZU0Av21viskCvyJNxZFWoRJ7wCgPUaukg&usqp=CAU"></img>
      <CardContent>
            
            <h4>Car Pick Up</h4>
        <Typography variant="body2" color="text.secondary" lineHeight="0.5">
            <h4>Schedule a Pick-up</h4>
            <h4>Handover to Us</h4>
        </Typography>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"40px"}}>
      <CardMedia
        sx={{ height: 50,width:200}}
        />
        <img style={{width:"60px"}}src="https://i.pinimg.com/736x/14/fd/61/14fd610d6b1cee4c2d4305ae85b69681.jpg"></img>
      <CardContent>
      
            <h4>Car Service</h4>
        <Typography variant="body2" color="text.secondary" lineHeight="0.5">
            <h4>Choose your Service</h4>
            <h4>Expect Status Updates</h4>
        </Typography>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 345 }} style={{marginLeft:"40px"}}>
      <CardMedia
        sx={{ height: 50,width:200}}
        />
        <img style={{width:"70px"}}src="https://cdn.icon-icons.com/icons2/2717/PNG/512/number_circle_four_icon_173689.png"></img>
      <CardContent>
            
            <h4>At your Door-Step</h4>
        <Typography variant="body2" color="text.secondary" lineHeight="0.5">
            <h4>Get a Door Step</h4>
            <h4>Pick-up and Drop</h4>
        </Typography>
      </CardContent>
    </Card>
  </Box>
</div>














<div>
    <Box sx={{background:'black',height:'420px' }}>
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
    </div>

  );
}
export default HomePage;