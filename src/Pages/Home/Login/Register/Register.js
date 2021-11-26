import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../../imgs/login5.jpg'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink, useHistory } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PasswordIcon from '@mui/icons-material/Password';
import useAuth from '../../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name,history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" style={{color:'#7242eb'}}  gutterBottom>Register Now</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                        id="input-with-icon-textfield"
                        sx={{ width: '75%', m: 1 }}
                        label="Your Name"
                        name="name"
                        onBlur={handleOnBlur}

                        InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle sx={{color:'#06d286'}}/>
                        </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />
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
                        <TextField
                        id="input-with-icon-textfield"
                        sx={{ width: '75%', m: 1 }}
                            type="password"
                            label="ReType Your Password"
                            name="password2"
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

                        <Button sx={{ width: '75%', m: 1 }} type="submit" style={{backgroundColor:'#7804b5'}}variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text" style={{color:'#82039e',fontWeight:'500'}}>Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' ,marginTop:'20px'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
