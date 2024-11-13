import { Box,Card,Typography,CardMedia,CardContent,Button} from '@mui/material'
import arrow from './right.png'
import img1 from './pro1.png'
import img2 from './pro3.png'
import img3 from './pro2.png'
import img4 from './pro4.png'
import img5 from './pro5.png'
import img6 from './pro6.avif'

const webStyle={
  box:{
    transform: ' rotate(128deg)',
    height: '7vw',
    opacity: '0.2',
    width: '5vw',
    marginTop:'0vh'
  },
  img:{
    height:350,width:'100%','&:hover': {
          backgroundColor: 'primary.dark',
        }
  },
  card:{
      width:{xs:'92vw',sm:'92vw',md:'70vw',lg:'60vw'},cursor:'pointer',zIndex:1,
    transition: ' 0.3s ease, transform 0.3s ease',
    margin:{xs:'2vw',md:'1vh',sm:'2vw'},'&:hover': {
      boxShadow:5
    }
  },
  button:{
    color:'#4e3e6b',
    backgroundColor:'#e2d8f0',
    borderRadius:'4vh',

    margin:'1.2vw',
marginTop:'0'  } 
}

const Projects = () => {
  return (
    <Box sx={{backgroundColor:'#e2d8f0',overflow:'hidden',width:'100%',height:'100%'}}>
      <Box sx={{display:'flex',justifyContent:'space-between',padding:{xs:'2vh',md:'5vh',sm:'5vh',lg:'5vh'}}}>
      <Typography  sx={{fontWeight:100,fontSize:{xs:'6vw',lg:'6vw'}}}> Feat
                <span style={{fontFamily:'cursive',color:'#4e3e6b'}}> Projects </span>
                <span style={{fontSize:'2vh'}}>(06)</span>
      </Typography>
      <Typography>
      <img src={arrow} style={webStyle.box}  alt="" />
      </Typography>
    </Box>
    <Box >
      <Box sx={{display:{xs:'block',sm:'block',md:'flex',lg:"flex"},justifyContent:'space-around',alignItems:'center',padding:{xs:'1vh',lg:"5vh"}}}>
      <Card sx={webStyle.card}>
        <CardMedia sx={{zIndex:0}}>
          <img src={img1} style={webStyle.img} alt="" />
        </CardMedia>
        <CardContent>
          <Button sx={webStyle.button}>HTML</Button>
          <Button sx={webStyle.button}>CSS</Button>
          <Button sx={webStyle.button}>JS</Button>
          <Button sx={{...webStyle.button,textTransform:'none',paddingLeft:'2vh',paddingRight:'1vw'}}>Bootstrap</Button>
        </CardContent>
      </Card>
      <Card sx={webStyle.card}>
      <CardMedia>
          <img src={img2} style={webStyle.img} alt="" />
      </CardMedia>
      <CardContent>
          <Button sx={webStyle.button}>HTML</Button>
          <Button sx={webStyle.button}>CSS</Button>
          <Button sx={webStyle.button}>JS</Button>
          <Button sx={{...webStyle.button,textTransform:'none',paddingLeft:'2vh',paddingRight:'1vw'}}>Bootstrap</Button>
      </CardContent>
      </Card>
      <Card sx={webStyle.card}>
      <CardMedia>
          <img src={img3} style={webStyle.img} alt="" />
        </CardMedia>
        <CardContent>
          <Button sx={webStyle.button}>HTML</Button>
          <Button sx={webStyle.button}>CSS</Button>
          <Button sx={webStyle.button}>JS</Button>
          <Button sx={{...webStyle.button,textTransform:'none',paddingLeft:'2vh',paddingRight:'1vw'}}>Bootstrap</Button>
        </CardContent>
      </Card>
      </Box>
      <Box sx={{display:{xs:'block',sm:'block',md:'flex',lg:"flex"},justifyContent:'space-around',padding:{xs:'1vh',lg:"5vh"}}}>
    
      <Card sx={webStyle.card}>
      <CardMedia>
          <img src={img4} style={webStyle.img} alt="" />
      </CardMedia>
      <CardContent sx={{display:'flex'}}>
          <Button sx={webStyle.button}>HTML</Button>
          <Button sx={webStyle.button}>CSS</Button>
          <Button sx={webStyle.button}>JS</Button>
          <Button sx={{...webStyle.button,textTransform:'none',paddingLeft:'2vw',paddingRight:'2vw'}}>   ReactJs</Button>
          <Button sx={{...webStyle.button,textTransform:'none',paddingLeft:'3vw',paddingRight:'3vw'}}>Bootstrap</Button>
      </CardContent>
      </Card>
      <Card sx={webStyle.card}>
      <CardMedia>
          <img src={img5} style={webStyle.img} alt="" />
      </CardMedia>
      <CardContent>
          <Button sx={webStyle.button}>HTML</Button>
          <Button sx={webStyle.button}>CSS</Button>
          <Button sx={webStyle.button}>JS</Button>
          <Button sx={{...webStyle.button,textTransform:'none',paddingLeft:'2vh',paddingRight:'1vw'}}>Bootstrap</Button>
      </CardContent>
      </Card>
      <Card sx={webStyle.card}>
      <CardMedia>
        <img src={img6} style={webStyle.img} alt="" />
      </CardMedia>
      <CardContent>
        <Button sx={webStyle.button}>HTML</Button>
        <Button sx={webStyle.button}>CSS</Button>
        <Button sx={webStyle.button}>JS</Button>
        <Button sx={{...webStyle.button,textTransform:'none',paddingLeft:'2vh',paddingRight:'1vw'}}>Bootstrap</Button>
      </CardContent>
      </Card>  
      </Box> 
    </Box>
    </Box>
  )
}

export default Projects