import React, { useState } from 'react';
import { Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import img3 from '../../../imgs/r1.png'
import { Box } from '@mui/system';
import useAuth from "../../../hooks/useAuth";

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const AddReviews = () => {
    const { user } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('description', description);
        formData.append('image', image);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Your Review added successfully')
                    console.log(data)
                    
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Container>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} >
                <Grid item md={6} style={{ marginTop: '20px' }}>
                    <img src={img3} alt="" style={{ width: '90%' }} />
                </Grid>
                <Grid item sm={4} md={5}>
                    <Typography variant="h4" sx={{ fontWeight: '800', color: '#06d286', paddingBottom: '20px', marginTop: '10px' }} component="div">
                        Review
                    </Typography>
                    <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="Name"
                                required
                                defaultValue={user.displayName}
                    onChange={e => setName(e.target.value)}
                    variant="outlined" />
                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="Email"
                                type="email"
                                defaultValue={user.email}
                                
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="outlined" />
                <TextField
                    sx={{ width: '80%' ,marginBottom:'10px'}}
                    label="say something"
                    type="text"
                    required
                    onChange={e => setDescription(e.target.value)}
                    variant="outlined" />
                
                            <Input  sx={{ width: '70%' }}
                    accept="image/*"
                                type="file"
                                variant="outlined"
                    onChange={e => setImage(e.target.files[0])} />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
                            </IconButton>
                            <br />
                <Button variant="contained" type="submit">
                    Add Review
                            </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}

                </Grid>
            </Grid>
        </Box>
    </Container>
    );
};

export default AddReviews;