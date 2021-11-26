import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { Typography, Container } from '@mui/material';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const Feauter = () => {
    return (
        <Container style={{marginTop:'20px'}}>

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
       <MonetizationOnRoundedIcon sx={{ fontSize: 50 }}/>
                            <Typography variant="h5" sx={{ fontWeight: '800', py:2}} component="div">
            Best Price Guarantee
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            In the unlikely event that you find a lower rates on Scootie Shop we will either cancel your current itinerary and provide you a full refund, or refund you the entire difference in price. You will need to provide documentation that all the elements of ours
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
       <LockRoundedIcon sx={{ fontSize: 50 }}/>
                            <Typography variant="h5" sx={{ fontWeight: '800', py:2}} component="div">
                            Safe and Secure
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            For Clients conformantion agents also provide information on customs regulations, required documents (passports, visas, and certificates of vaccination), and currency exchange rates.And Secret All the informantion of customers.
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
       <ThumbUpRoundedIcon sx={{ fontSize: 50 }}/>
                            <Typography variant="h5" sx={{ fontWeight: '800', py:2}} component="div">
                            Best Scootie Agent
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            We are a team who believe that the customer is king, together we can make your experience one that you never forget. That’s why our website is your one stop shop for two wheelers.offers all exclusive offers from dealers with cash discount, attractive finance deals.
            </Typography>                                    
          </Paper>
      
          </Grid>
      </Grid>
        </Box>
        </Container>
            
    );
};

export default Feauter;