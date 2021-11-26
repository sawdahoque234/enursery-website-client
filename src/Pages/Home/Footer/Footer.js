import * as React from 'react';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
        
            <Grid container rowSpacing={1} spacing={2} style={{ backgroundColor: '#1d2b39', color: 'white' }} sx={{p:1,mt:1}}>
        <Grid item xs={12} md={9}>
        <Typography >
        Copyright © eNursery 2021. All rights reserved.              
        </Typography>
        </Grid>
                    <Grid item xs={12} md={3}>
                        <span style={{ marginLeft:'25px' }}> 
                        <FacebookRoundedIcon sx={{color:'blue',backgroundColor:'white',borderRadius:'50%',padding:'5px'}} />
                        </span>
                        <span style={{ marginLeft:'25px' }}> 
                        <InstagramIcon sx={{color:'#b56328',backgroundColor:'white',borderRadius:'50%',padding:'5px'}} />
                            
                        </span>
                        <span style={{ marginLeft:'25px' }}> 
                        <LinkedInIcon sx={{color:'blue',backgroundColor:'white',borderRadius:'50%',padding:'5px'}} />
                            
                        </span>
                        <span style={{ marginLeft:'25px' }}> 
                        <YouTubeIcon sx={{color:'red',backgroundColor:'white',borderRadius:'50%',padding:'5px'}} />
                        </span>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    );
};

export default Footer;