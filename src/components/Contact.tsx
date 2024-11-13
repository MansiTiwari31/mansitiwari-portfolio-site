import {Box, Typography} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Contact = () => {
  return (
    <Box sx={{height:'100vh',width:'100%',display:{xs:'block',lg:'flex'},backgroundColor:'#e2d8f0',overflow:'hidden'}}>
        <Box sx={{marginTop:{xs:'0px',lg:'50px'},width:{xs:'85%',lg:'40%'},padding:'5vh'}}>
            
<Typography variant='h3' sx={{marginTop:'20px',color:'#ff5e5b',fontFamily:'cursive'}}>Get in Touch !!</Typography>

<Typography variant='h4' sx={{marginTop:'20px',color:'#4e3e6b'}}>
LET'S CREATE  & GROW TOGETHER
</Typography>

<Typography variant='h5' sx={{marginTop:'20px',color:'#4e3e6b'}}>Feel free to contact, & I'll get back to you as soon as possible.</Typography>
<Box sx={{paddingTop:'5vh'}}>
    <Box sx={{display:'flex'}}>
    <LocationOnOutlinedIcon sx={{color:'#ff5e5b',fontSize:'5vh'}}/>
    <Typography variant='h6' sx={{color:'#4e3e6b',paddingLeft:'2vh'}}>Lig Square, Indore</Typography>
    </Box>
    <Box sx={{display:'flex',paddingTop:'5vh'}}>
    <MailOutlinedIcon sx={{color:'#ff5e5b',fontSize:'5vh'}}/>
    <Typography variant='h6' sx={{color:'#4e3e6b',paddingLeft:'2vh'}}>mansitiwari123@gmail.com</Typography>
    </Box>
    <Box sx={{display:'flex',paddingTop:'5vh'}}>
    <LocalPhoneOutlinedIcon sx={{color:'#ff5e5b',fontSize:'5vh'}}/>
    <Typography variant='h6' sx={{color:'#4e3e6b',paddingLeft:'2vh'}}>+91 9876543233</Typography>
    </Box>
</Box>
        </Box>

    </Box>
  )
}

export default Contact