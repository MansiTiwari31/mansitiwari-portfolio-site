import { Box, Typography,Button, Divider,Card} from '@mui/material';
import image1 from './html.png';
import image2 from './css.png';
import image3 from './js.png';
import image4 from './react.png';
import image5 from './bts.png';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';  
    link.download = 'My_CV.pdf'; 
    link.click(); 
  };
  return (
    <Box sx={{backgroundColor:'#e2d8f0', width:{xs:'100%',lg:'100%'},overflow:'hidden',
    height:'100%',display:{lg:'flex',xl:'flex'}}} id='About'>
      
      <Card sx={{height:{xs:'80%',md:'95%',sm:'95%',lg:'100%'},width:{xs:'90%',md:'95%',sm:'95%',lg:'40%'},margin:'3vh',backgroundColor:'#9d80d0',display:'flex',alignItems:'center',justifyContent:'center',flexDirection: 'column'}}>
        <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" alt="" height='600' width='85%' style={{paddingTop:'3vh',paddingBottom:'2vh',borderRadius:'4%'}} />
        <Button onClick={handleDownload} sx={{backgroundColor:'#e2d8f0',color:'#4e3e6b',padding:'2vh',margin:'1vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Download CV <DownloadIcon/></Button>
      </Card>
      <Box sx={{height:'95%',width:{xs:'90%',md:'100%',sm:'90%',lg:'60%'},padding:'5vh'}}>
        <Typography variant='h3' sx={{color:'#4e3e6b'}}>About Me !</Typography>
        <Typography variant='h3' sx={{color:'#4e3e6b',paddingTop:'1vh'}}>Hello, I'm Mansi Tiwari </Typography>
        <Divider sx={{backgroundColor:'#9d80d0',height:'0.8vh',width:'20vh',marginTop:'1vh'}}/>
        <Typography variant='h6' sx={{color:'#4e3e6b',paddingTop:'3vh'}}> "A self taught developer who loves to codes something that will impact <br /> majority of the people in good way!",</Typography>
        <Card sx={{width:{xs:'90%',md:'90%',sm:'100%',lg:'90%'},height:{xs:'136vh',md:'90%',sm:'100%',lg:'58.5vh'}, backgroundColor:'#9d80d0', marginTop:'3vh',paddingBottom:'2vh'}}>
                <Typography variant='h5' sx={{color:'#e2d8f0',paddingLeft:'5vh',paddingTop:'2vh'}}>Relevant Technologies</Typography>
                <Box sx={{display:{xs:'block',md:'flex',sm:'flex',lg:'flex'}}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                  <img src={image1} style={{height: '150px', width: '220px'}} alt=""/><br />
                  <Typography variant='h5' sx={{color:'#4e3e6b'}}> HTML </Typography>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                  <img src={image2} style={{height: '130px', width: '220px', paddingRight: '0px'}} alt=""/><br/>  
                  <Typography variant='h5' sx={{color:'#4e3e6b',paddingTop:'0vh'}}> CSS </Typography>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                  <img src={image3} style={{height: '140px', width: '220px'}}  alt=""/><br/>
                  <Typography variant='h5' sx={{color:'#4e3e6b',paddingTop:'0vh'}}> Javascript </Typography>
                </div>
                </Box>
                
                <Box sx={{display:{xs:'block',md:'flex',sm:'flex',lg:'flex'}}}>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                  <img src={image4} style={{height: '150px', width: '220px'}}  alt=""/>
                  <Typography variant='h5' sx={{color:'#4e3e6b',paddingTop:'0vh'}}> ReactJs </Typography>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                  <img src={image5} style={{height: '150px', width: '220px'}}  alt=""/>
                  <Typography variant='h5' sx={{color:'#4e3e6b',paddingTop:'0vh'}}> Bootstrap </Typography>
                </Box>
                </Box>
                
        </Card>
      </Box>
  </Box>
  )
}

export default About