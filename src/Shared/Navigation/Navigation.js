import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import Button from '@mui/material/Button';

import {Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
  const {user,logout} = useAuth()

    return (
        <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor:'#ffffff'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </IconButton>
            <img src={logo} style={{ height: '40px' }} alt="" />
            <Typography variant="h5" sx={{fontWeight:'500',color:'#06d286'}}>
           eNursery
            </Typography>
            <br />
            <Typography   sx={{fontWeight:'500',fontSize:'12px',color:'black',pt:2}}>
            Shop
            </Typography>

        <Link to="/home" style={{textDecoration:'none',color:'#7804b5',fontSize:'18px',marginLeft:'30px',fontWeight:'700'}}>
            Home
        </Link>
        <Link to="/products" style={{textDecoration:'none',color:'#7804b5',fontSize:'18px',margin:'20px',fontWeight:'700'}}>
            Products
        </Link>
        <Link to="/aboutsection" style={{textDecoration:'none',color:'#7804b5',fontSize:'18px',margin:'20px',fontWeight:'700'}}>
            About
              </Link>
        <Link to="/contact" style={{textDecoration:'none',color:'#7804b5',fontSize:'18px',margin:'20px',fontWeight:'700'}}>
            Contact us
              </Link>
              {/* login**** */}

              {user.email && <Link to="/dashboard" style={{ textDecoration: 'none',  color: '#7804b5', fontWeight: '700', fontSize: '18px' }}>Dashboard</Link>}
              {user.email && <span style={{fontWeight:'600', marginLeft:'20px',color: '#b00e1e  ', }}>Hello! {user.displayName} </span>}
              {user?.email ?
                <Box>
                  
              <Button onClick={logout} style={{marginLeft:"20px",backgroundColor:'#06d286 ',paddingTop:'5px'}}  variant="contained">Logout </Button>
                </Box>
                :
              <Link to="/login" style={{textDecoration:'none',color:'#7804b5',fontWeight:'700',fontSize:'18px'}}>Login</Link>
   
}

        </Toolbar>
      </AppBar>
    </Box> 
        </div>
    );
};

export default Navigation;