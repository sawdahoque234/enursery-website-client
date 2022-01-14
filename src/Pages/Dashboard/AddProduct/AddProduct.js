import React, { useState } from 'react';
import { Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import img2 from '../../../imgs/g4.png'
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const { user } = useAuth()

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('city', city);
        formData.append('phone', phone);
        formData.append('sellerName', sellerName);
        formData.append('description', description);
        formData.append('image', image);

        fetch('https://cryptic-fortress-77677.herokuapp.com/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Your Product added successfully')
                    console.log(data)
                    
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
        return (
            <Container>
        <Box sx={{ width: '100%'}}>
        <Grid container rowSpacing={1} >
        <Grid item md={5} style={{marginTop:'70px'}}>
                            <img src={img2} alt="" style={ {width:'100%'}}/>
          </Grid>
                <Grid item sm={4} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: '800', color: '#06d286', paddingBottom: '10px'}} component="div">
                        Add Product
                    </Typography>
                    <form onSubmit={handleSubmit}>
                {/* <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    defaultValue={user.displayName}
                                required
                     label='seller'          
                    onChange={e => setName(e.target.value)}
                    variant="outlined" /> */}
                                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="Seller Name"
                                type="integer"
                               
                               defaultValue={user.displayName} 
                    required
                    onChange={e => setSellerName(e.target.value)}
                    variant="outlined" />
                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="Product Name"
                                required
                               
                    onChange={e => setProductName(e.target.value)}
                                    variant="outlined" />
                                
                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="Product Price"
                                type="integer"
                               
                                
                    required
                    onChange={e => setPrice(e.target.value)}
                    variant="outlined" />
                
                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="Stock"
                                type="integer"
                               
                                
                    required
                    onChange={e => setStock(e.target.value)}
                    variant="outlined" />
                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="City"
                                type="integer"
                               
                                
                    required
                    onChange={e => setCity(e.target.value)}
                                    variant="outlined" />
                <TextField
                    sx={{ width: '80%',marginBottom:'10px' }}
                    label="Phone"
                                type="integer"
                               
                                
                    onChange={e => setPhone(e.target.value)}
                                    variant="outlined" />

                                
                <TextField
                    sx={{ width: '80%' ,marginBottom:'10px'}}
                    label="Description"
                    type="text"
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
                    Add Product
                            </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}

                </Grid>
        </Grid>
            </Box>
        </Container>
            
        );
    };

export default AddProduct;