import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../../imgs/login4.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PasswordIcon from '@mui/icons-material/Password';
import useAuth from '../../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="h4" style={{color:'#7242eb',marginTop:'20px'}} gutterBottom>Please Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                        id="input-with-icon-textfield"
                            sx={{ width: '75%', m: 1 }}
                        label="Your Email"
                            
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}

                        InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <EmailRoundedIcon sx={{color:'#06d286'}}/>
                        </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />
                        <TextField
                        id="input-with-icon-textfield"
                        sx={{ width: '75%', m: 1 }}
                        label="Your Password"
                            type="password"
                            name="password"
                        onBlur={handleOnBlur}

                        InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <PasswordIcon sx={{color:'#06d286'}}/>
                        </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" style={{backgroundColor:'#7804b5'}}>Login With Email</Button>
                       
                        
                    </form>
                    <div><Button onClick={handleGoogleSignIn}  sx={{ width: '75%', m: 1,backgroundColor:'#06d286'}} variant="contained"> <GoogleIcon sx={{paddingRight:'5px' }}/>Login With Google</Button></div>
                    <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text" style={{color:'#82039e',fontWeight:'500'}}>New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%',marginTop:'10px' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;