import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';

import img1 from '../../../imgs/plants2.jpg'
import img2 from '../../../imgs/seeds.jfif'
import img3 from '../../../imgs/tools1.png'
import img4 from '../../../imgs/ferti.jpg'
const HomeProducts = () => {
    return (
        <Box sx={{ flexGrow: 1, margin: '40px', padding: '30px' }}>
            <Typography variant="h6" style={{marginTop:'20px'}} sx={{fontWeight:'400',color:'info.main'}} component="div">
         Our Categories
        </Typography>
            <Typography variant="h3" sx={{fontWeight:500,m:3,color:'#9907ed'}} component="div">
          What We Buy and Sell?
        </Typography>   
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
              <Grid item xs={2} sm={4} md={3}>
                  <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h4" sx={{ fontWeight: '500',textAlign:'left',color:'green'}} component="div">
                          All Kinds Of<br/>Fresh Plants
            </Typography>                                    
            <img src={img1} style={{width:'100%',borderRadius:'10px',height:'220px'}} alt=""/>
          </Paper>
            </Grid>
              <Grid item xs={2} sm={4} md={3}>
                  <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h4" sx={{ fontWeight: '500',textAlign:'left',color:'gray'}} component="div">
                          All Kinds Of<br/>Fresh Seeds
            </Typography>                                    
            <img src={img2} style={{width:'100%',borderRadius:'10px',height:'220px',py:2}} alt=""/>
          </Paper>
            </Grid>
              <Grid item xs={2} sm={4} md={3}>
                  <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h4" sx={{ fontWeight: '500',textAlign:'left',color:'green'}} component="div">Nursery  Accessories
            </Typography>                                    
            <img src={img3} style={{width:'100%',borderRadius:'10px',height:'220px'}} alt=""/>
          </Paper>
            </Grid>
              <Grid item xs={2} sm={4} md={3}>
                  <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h4" sx={{ fontWeight: '500',textAlign:'left',color:'gray'}} component="div">
                         Best Plants Pesticides 
            </Typography>                                    
            <img src={img4} style={{width:'100%',borderRadius:'10px',height:'220px'}} alt=""/>
          </Paper>
            </Grid>
              
             
              
              
       
        </Grid>
      </Box>
    );
};

export default HomeProducts;