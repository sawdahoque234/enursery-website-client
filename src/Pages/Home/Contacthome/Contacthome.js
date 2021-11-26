import { Container, Grid, Typography,Paper ,TextField, Button} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import cimg from '../../../imgs/contactimg.jpg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessAlarmsTwoToneIcon from '@mui/icons-material/AccessAlarmsTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
const Contacthome = () => {
    const { register,control, } = useForm();

    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: '600',paddingTop:'20px', color: '#06d286' }} component="div">
 Contact us
  </Typography>
            <Typography variant="body2" sx={{marginBottom:'50px'}}>
If you face any problem to buy and sell any product tell us details without any hegitation.
  </Typography>
            <Grid  container spacing={2}>
                <Grid md={6}>
                    <img src={cimg} width="90%" sx={{borderRadius:'10%'}} alt='' />
                </Grid>
                <Grid md={5}>
                <Typography variant="h5" sx={{ fontWeight: '800', color: 'black', paddingBottom: '20px', marginTop: '30px' }} component="div">
                Get in touch with us
                            </Typography>
                            <form id="user-form" >
                            <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Name"  {...register("name" ,{required: true })} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Email"  {...register("email" ,{required: true })} />)} />
                                <Controller
                                    control={control}
                                    render={({ field: { value } }) => (
                                        <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Say something" defaultValue="" {...register("description", { required: true })} />)} />
                               
                                <Button variant="contained" style={{ backgroundColor: 'gray' }} type="submit">Send Now</Button>
                            </form>
                </Grid>
            </Grid>
           

    <Typography variant="h4" sx={{ fontWeight: '700',marginBottom:'20px', color: '#06d286', paddingTop: '30px' }} component="div">
            </Typography>
    <Typography variant="body2" sx={{ marginBottom:'20px'}} component="div">
    
            </Typography>

        <Grid  container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '600',color:'green', py:2}} component="div">
                            <LocalPhoneIcon sx={{color:'green',fontSize:'30px'}}/> Call us Anytime on
            </Typography>                                    
            <Typography variant="h6" sx={{fontWeight:'500'}} component="div">
            Phone 01: 0181 3456 7890<br/>
Phone 02: 0191 3427 7670
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '600', py:2,color:'gray'}} component="div">
                            <AccessAlarmsTwoToneIcon sx={{color:'gray',fontSize:'37px'}}/>Active Hours
            </Typography>                                    
            <Typography variant="body2" sx={{fontWeight:'500'}} component="div">
            Every day from 09:00 AM to 9:00 PM
            </Typography>                                    
          </Paper>
      
          </Grid>
        <Grid item xs={2} sm={4} md={4}>
        <Paper variant="outlined" sx={{my:2,p:3}}>
                            <Typography variant="h5" sx={{ fontWeight: '800', py:2,color:'green'}} component="div">
                           <EmailTwoToneIcon sx={{color:'green',marginTop:'-5px',fontSize:'30px'}}/> Email us on
            </Typography>                                    
            <Typography variant="h6" sx={{fontWeight:'500'}} component="div">
           enursery@email.com
            </Typography>                                    
          </Paper>
          </Grid>
          </Grid>
             
                
        </Container>
        
    );
};

export default Contacthome;