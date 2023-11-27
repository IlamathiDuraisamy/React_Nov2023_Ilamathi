import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Stack,styled } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom';

function Service() {
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
        <p style={{paddingLeft:"80px",fontSize:"30px",fontFamily:"cursive"}}>Our Services</p>
        </StyledToolbar>
      </AppBar>
       
      </div>
  <div >
    <div>
    <img style={{paddingTop:"110px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/115/thumb_AM-01195.JPG"></img>
    <img style={{paddingTop:"110px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/129/thumb_2021-02-16_Workshop.jpg"></img>
    <img style={{paddingTop:"110px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/113/thumb_BMW3.jpg"></img>
    <img style={{paddingTop:"110px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/116/thumb_AM-01094.JPG"></img>
    <img style={{paddingTop:"10px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/111/thumb_BMW4.jpg"></img>
    <img style={{paddingTop:"10px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/112/thumb_AM-01201.JPG"></img>
    <img style={{paddingTop:"10px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/118/thumb_BMW1.jpg"></img>
    <img style={{paddingTop:"10px",paddingRight:"10px"}} src="https://automechanica.com/uploads/service_gallery/image/114/thumb_BMW2.jpg"></img>
   </div>
    <p>
    <h1 style={{color:"rgb(210, 10, 10)"}}>Periodic Maintenance Service
</h1>
<b><p style={{marginLeft:"100px",marginRight:"100px"}}>Wear and tear in your vehicle is unavoidable, 
    and it would usually have a finite life span before eventually being 
    retired from operations. The good news is, your vehicle doesn’t just 
    go end-of-life overnight.Periodic maintenance requires maintenance 
    tasks to be performed at set time intervals while your vehicle is 
    operational. Periodic maintenance services are planned ahead of time
     and are performed regardless of whether signs of deterioration show
      up or not.</p>
</b>
    </p>
    <p>
    <h1 style={{color:"rgb(210, 10, 10)"}}>Dent & Paint
</h1>
<img style={{height:"400px",width:"400px"}}src="https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg"></img>
<b><p style={{marginLeft:"100px",marginRight:"100px"}}>Our technicians at AutoMechanica take
 immense pride in the quality of our work and in caring for your vehicle.
  All products and services used at our service center are of the highest 
  quality to ensure the proper paint texture, gloss, and finish is rendered 
  to your car. We go out of our way to make sure the process is smooth and 
  hassle-free, keeping your satisfaction as our top priority.

</p>
</b>
    </p>
    <p>
    <h1 style={{color:"rgb(210, 10, 10)"}}>Accidental Repair

</h1>
<img style={{height:"400px",width:"400px"}}src="https://automechanica.com/uploads/service/service_image/4/1.jpg"></img>
<b><p style={{marginLeft:"100px",marginRight:"100px"}}>AutoMechanica is an expert 
in car body repair and collision repair for all types of cars.
 Our body shop guarantees the best professional services in town. 
 We have established a reputation, and many insurers respect us. Call 
 or visit our service center at AutoMechanica for a free estimate on any 
 accident repair or auto body repair.
</p>
</b>
    </p>
    <p>
    <h1 style={{color:"rgb(210, 10, 10)"}}>Bumper Repair
</h1>
<img style={{height:"400px",width:"400px"}}src="https://automechanica.com/uploads/service/service_image/3/2.jpg"></img>
<b><p style={{marginLeft:"100px",marginRight:"100px"}}>Plastic bumpers don’t always need replacement when damage happens. 
Instead, they can be saved and even retrieved with innovative auto 
reconditioning techniques. Our expert technicians can repair scuffed, 
scratched, dented, detached, and torn bumpers for much less than the cost 
of replacement. We offer same-day service, and we guarantee your satisfaction!

AutoMechanica uses only the highest quality paints and sealants
 available in the market to keep your car looking like new, 
 and we guarantee the quality of our paintwork.

</p>
</b>
    </p>
    <p>
    <h1 style={{color:"rgb(210, 10, 10)"}}>Rubbing, Waxing, and Polishing

</h1>
<img style={{height:"400px",width:"400px"}}src="https://automechanica.com/uploads/service/service_image/7/2__2_.jpg"></img>
<b><p style={{marginLeft:"100px",marginRight:"100px"}}>Rubbing, waxing,
 and polishing are almost a necessity to keep your car looking great week
  in and week out. Our technicians have undergone the most extensive and stringent 
  car detail training program. And the only car that matters is yours because 
  we will detail it to your complete satisfaction. Each time!


</p>
</b>
    </p>
    <p>
    <h1 style={{color:"rgb(210, 10, 10)"}}>Engine Repairs

</h1>
<img style={{height:"400px",width:"400px"}}src="https://automechanica.com/uploads/service/service_image/12/1__9_.jpg"></img>
<b><p style={{marginLeft:"100px",marginRight:"100px"}}>
Your engine light is an indication that something on your car needs attention.
 Your car may have some issues, 
and it’s time to take it to a service center.
</p>
</b>
    </p>
    <h1><p></p></h1>
    <div>
      <p></p>
      <Button
            type="submit"
            style={{backgroundColor:"rgb(210, 10, 10)",color:"black"}}
            component={RouterLink} to="/contact">
          Contact Us
      </Button>
      <p></p>
      <Button
            type="submit"
            style={{backgroundColor:"rgb(210, 10, 10)",color:"black"}}
            component={RouterLink} to="/booking">
          Book an Appointment
      </Button>
    </div>
    <h1><p></p></h1>
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

  );
}
export default Service;  