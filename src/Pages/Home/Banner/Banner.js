import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import bannerBg from '../../../imgs/l.jpg'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

import './Banner.css'
const banner = {
    background: `url(${bannerBg})`,
    height:480

}

const Banner = () => {
    return (
        <Box style={banner} id="a" >
            <Grid container >
                <Grid item xs={12} md={7}>
                    
                </Grid>
                <Grid item style={{textAlign:'left'}} xs={12} md={5}>
                <Typography variant="h2" sx={{fontWeight:'800',fontSize:'70px',color:'white',my:4}} component="div">
            Buy And Sell Your Nursery Product 
                    </Typography>
                    {/* <Typography sx={{color:'black',fontSize:'20px',mx:2,p:1,fontWeight:'700'}}>
                    We are a team who believe that the customer is king,<br/> together we can make your experience one that you never <br/>forget. That’s why our<br/> website is your one stop shop for two wheelers.
                    </Typography> */}
                    <Link to="/products" style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{m:2,py:1,px:3}} style={{backgroundColor:'#9907ed'}}>Get Started</Button></Link>
        </Grid>
      </Grid>
      
    </Box>
    
    );
    
    // ****
    
};

export default Banner;