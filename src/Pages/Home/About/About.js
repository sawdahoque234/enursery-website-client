import { Container, Grid, Typography,Paper } from '@mui/material';
import React from 'react';
import aboutimg from '../../../imgs/about1.jpg'

const About = () => {
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: '600',marginBottom:'20px', color: '#06d286', padding: '20px' }} component="div">
 About us
  </Typography>
            <Grid  container >
                <Grid md={6}>
                    <img src={aboutimg} width="80%" sx={{borderRadius:'10%'}} alt='' />
                </Grid>
                <Grid md={6}>
                    <Typography variant="h6" sx={{textAlign:'initial',marginTop:'10px'}}>
                   <span style={{color:'green',fontWeight:'700'}}>eNursery</span> is a website where you can buy and sell almost everything for your gardening,planting or foresting. The best deals are often done with people who live in your own city or on your own street, so on eNursery it's easy to buy and sell locally. All you have to do is select your region.
                    It takes you less than 2 minutes to post a product on eNursery. You can sign up for a free account and post product details easily every time. Anyone can buy any product by onclick on buy now button.But they have to register or login before buying or selling any products.
                    </Typography>
                </Grid>
            </Grid>
           

    <Typography variant="h4" sx={{ fontWeight: '700',marginBottom:'20px', color: '#06d286', paddingTop: '30px' }} component="div">
Sell Fast on eNursery
            </Typography>
    <Typography variant="body2" sx={{ marginBottom:'20px'}} component="div">
    Below are some tips on how to post product that attract a lot of buyer interest.
            </Typography>

        <Grid  container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '800', py:2}} component="div">
                            Add as much detail as you can
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            Post with clear details get more views! Include keywords and information that buyers will be interested in. Remember to be honest while providing these details.
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '800', py:2}} component="div">
                            Add great photos
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            Use clear photos of the item you're selling. Ads with real photos get up to 10 times more views than ads with catalogue/stock photos. Make sure the lighting is good and take photos from different angles.
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '800', py:2}} component="div">
                            Pick the right price
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            Everything sells if the price is right! Browse similar post on enursery and choose a competitive price. If you are willing to negotiate, be sure to select the Negotiable option while posting the ad.
            </Typography>                                    
          </Paper>
          </Grid>
          </Grid>
    <Typography variant="h4" sx={{ fontWeight: '700',marginBottom:'20px', color: 'red', paddingTop: '30px' }} component="div">
    General safety advice
            </Typography>

        <Grid  container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '600',py:1}} component="div">
                            Exchange item and payment at the same time

            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            Buyers: don't make any payments before receiving an item. Sellers: don't send an item before receiving payment.
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '600', py:2}} component="div">
                            Never give out financial information

            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            This includes bank account details, eBay/PayPal info, and any other information that could be misused.
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '600', py:3}} component="div">
                            Use common sense
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500',textAlign:'left'}} component="div">
            Avoid anything that appears too good to be true, such as unrealistically low prices and promises of quick money.


            </Typography>                                    
          </Paper>
          </Grid>
          </Grid>
                
        </Container>
        
    );
};

export default About;