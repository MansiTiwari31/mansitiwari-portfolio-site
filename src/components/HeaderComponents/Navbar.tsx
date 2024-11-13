import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import React from 'react'
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const webStyle={
    btnStyle:{
        color:'white',
        fontSize:'1rem',
        paddingRight:'5vw'
    },
    toolbar:{
        display:'flex',
        flexbox:'row wrap',
        justifyContent:'space-between',
        backgroundColor:'#4e3e6b',
        padding:'1rem'
    }
  }


const Navbar = () => {
  const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const about:any = () => {
      setOpen(false)
      navigate('/About');
    };
    const home:any = () => {

       setOpen(false)
       navigate('/home');
    };
    const con:any = () => 
      {
      setOpen(false)
       navigate('/contact');
    };
    const pro:any = () => {
      setOpen(false)
      navigate('/projects'); 
   };

    const toggleDrawer = (newOpen:any) => () => {
      setOpen(newOpen);
    };

  return (
    <AppBar  sx={{position:'static'}}>
        <Toolbar sx={webStyle.toolbar}>
            <Typography sx={{fontSize:'1.5rem',fontFamily:'cursive'}}>
                MANSI TIWARI
            </Typography>
            <Box sx={{ display: {xs:'none',sm:'none',md: 'none',lg:'flex' } }}>
             <Button onClick={home} sx={webStyle.btnStyle}>Home</Button>
                    <Button onClick={about} sx={webStyle.btnStyle}>About</Button>
                    <Button onClick={pro} sx={webStyle.btnStyle}>Projects</Button>
                    <Button onClick={con} sx={webStyle.btnStyle}>Contact</Button>
            </Box>
            <Box sx={{ display: {xs:'flex',sm:'flex',md: 'flex',lg:'none' } }}>
                    <MenuIcon onClick={toggleDrawer(true)}/>
                    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{backgroundColor:'#4e3e6b'}}>
              <Box sx={{ p: 2, backgroundColor: 'white' }}>
                <Box
                  sx={{
                    display: 'flex' ,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor:'#e2d8f0',
                    width:'50vw'
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{width:"100%"}}></Divider>
                <MenuItem onClick={home}>Home</MenuItem>
                <MenuItem onClick={about}>About</MenuItem>
                <MenuItem onClick={pro}>Portfolio</MenuItem>
                <MenuItem onClick={con}>Contact Us</MenuItem>  
              </Box>
            </Drawer>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar