import { Box, Typography,Avatar } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import image from '../file.png';
import '../styles/App.css'
import { useNavigate } from 'react-router-dom';

const webStyle={
  box:{
    boxSizing:'border-box',
    padding:'0',
    margin:'0px',
    height:'87vh',
    width:'100%',
   color:'white',
   overflow:'hidden',
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
  },
  box1:{
    width:'100%',
   
     height:'100%',
    background:`url(${'https://images.unsplash.com/photo-1727362186733-23d53dbefe43?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    display:{md:'flex',xs:'block',sm:'block',lg:'flex'},
    justifyContent: "center",
    alignItems:'center'
  }
}

const Header = () => {
  const navigate = useNavigate();
  
  const about:any = () => {
     navigate('/About');
  };
  return (
    <Box sx={webStyle.box}>
      <Box sx={webStyle.box1}>
      <Box>
      <Typography sx={{fontSize:'4rem',padding:{xs:'11vh',lg:'20vh'},paddingLeft:{xs:'6vh',lg:'21vh'},paddingTop:{xs:'1vh',lg:'0vh',md:'13vh'},paddingBottom:{xs:'0vh',lg:'3vh'},lineHeight:1.2}}>I'm a <span style={{color:'#9c27b0',fontFamily:'cursive',paddingTop:'0vh'}}> REACTJS </span>
       Developer</Typography>
       <Typography variant='h5' sx={{fontSize:{xs:'1.4rem',lg:'2vw'},paddingLeft:{xs:'6vh',lg:'21vh'}}}>Turning ideas into interactive, beautiful, and <br /> user-centric websites...</Typography>
      <Typography onClick={about} sx={{fontSize:'2rem',paddingLeft:{xs:'6vh',lg:'21vh'},paddingTop:'3vh', color:'white',fontFamily:'cursive',cursor:'pointer'}}>About Me ! <ArrowDownwardIcon className="animated-arrow" sx={{borderRadius:'4vh',backgroundColor:'#9c27b0',padding:'1.5vh',marginBottom:'-1.2vh'}}/></Typography>
       </Box>
      
      <Box sx={{display:{md:'flex',xs:'flex',sm:'flex',lg:'flex'},justifyContent:'center',alignItems:'center'}}>
        {/* <img src={image} height='250rem'  style={{paddingRight:'7vh',paddingTop:'0vh'}}  alt="" /> */}
        <Avatar alt="work"
  src={image}
  sx={{ width:'40vw', height: '40vw',paddingRight:'7vh',paddingTop:'0vh' }}/>
      </Box>
      
      </Box>
    </Box>
  )
}

export default Header