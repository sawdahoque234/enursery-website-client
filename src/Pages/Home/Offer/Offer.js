import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded'
import NaturePeopleRoundedIcon from '@mui/icons-material/NaturePeopleRounded';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
const Offer = () => {
    return (
        <Box sx={{ flexGrow: 1 ,marginTop:'15px'}}>
      <Grid container  sx={{paddingLeft:'20px',marginRight:'20px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={3} sm={4} md={4}>
                    
                    <Typography variant="h5" sx={{display:'flex',alignItems:'items-center'}}>
                        <span><AirportShuttleIcon sx={{ color: 'green', fontSize: '60px', marginLeft: '50px', marginTop: '10px' }} /></span>
                        
                       <span style={{marginLeft:'15px',fontWeight:'800'}} > Free shipping
                    </span>
                    </Typography>
                    <Typography sx={{ marginTop:'-40px'}}> All order over 10000.0Tk<br/>& Every order 50.0Tk</Typography>
          </Grid>
                <Grid item xs={3} sm={4} md={4}>
                <Typography variant="h5" sx={{display:'flex',alignItems:'items-center'}}>
                        <span><MoneyRoundedIcon sx={{ color: 'green', fontSize: '55px', marginRight: '20px', marginTop: '10px' }} /></span>
                        
                       <span style={{fontWeight:'800'}} > Money Back
                    </span>
                    </Typography>
                    <Typography sx={{ marginTop:'-40px',marginLeft:'-80px'}}> If the item didn’t suit you</Typography>
          </Grid>
                <Grid item xs={3} sm={4} md={3}>
                <Typography variant="h5" sx={{display:'flex',alignItems:'items-center'}}>
                        <span><NaturePeopleRoundedIcon sx={{ color: 'green', fontSize: '55px', marginRight: '15px', marginTop: '10px' }} /></span>
                        
                        <span style={{ fontWeight: '800' }} >Made With Love
                    </span>
                    </Typography>
                    <Typography sx={{ marginTop:'-40px',marginLeft:'40px'}}>The Best Nesurey Service in Bd</Typography>
                    
          </Grid>
      </Grid>
    </Box>
    );
};

export default Offer;