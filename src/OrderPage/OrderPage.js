import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button ,Container, TextField} from '@mui/material';
import useAuth from '../hooks/useAuth';

const OrderPage = () => {
    const { productId} = useParams();
  const [product, setProduct] = useState([]);
  const {_id,productName,price,city,sellerName,stock} = product;
  
    const { register,reset, handleSubmit,control } = useForm();
  const { user } = useAuth();
  
  
    useEffect(() => {
        fetch(`https://cryptic-fortress-77677.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[productId])


    const onSubmit = data => {
      const order = { _id,productName,sellerName,price,city ,}
      data.order = order;
      data.status = "pending";
      data.return = "no";
      handleUpdateStock(data.quantity,product.productName,product.stock);
  fetch('https://cryptic-fortress-77677.herokuapp.com/orders', {
      method: 'POST',
      headers: {
          'content-type':'application/json'
      },
      body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(result => {
          if (result.insertedId) {
              alert('Ordered proceed successfully!!!')
              reset();
          }
      console.log(result)
  })
};
// *********************cart**************
const handleUpdateStock=(quantity,name,stock)=>{
  const TotalQuantity = Number(stock)- Number(quantity); 
  const product={name:name,quantity:TotalQuantity }
console.log(product, "fromdata")
fetch('https://cryptic-fortress-77677.herokuapp.com/updateStock', {
      method: 'PUT',
      headers: {
          'content-type':'application/json'
      },
      body:JSON.stringify(product)
  })
  .then(res=>res.json())
  .then(result => {
      console.log(result)
  })

}

    return (
        <Container>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} >
        <Grid item md={7} style={{marginTop:'20px'}}>
        <Card sx={{ maxWidth: 460}}>
      <CardActionArea>
      <img
              style={{ borderRadius: '10%',height:'240px',width:'80%', display: 'block', margin: 'auto' }} 
              src={`data:image/*;base64,${product.image}`}  alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {product.productName}
                    </Typography>
                    {/* <Typography gutterBottom variant="body1" sx={{color:'green'}}>
          Sell By: {sellerName}, {product.city}
          </Typography> */}
          <Typography gutterBottom variant="h5" component="div">
                      
                      Price: {product.price}.00 Tk
          </Typography>
          
          {stock ? <Typography className="mr-4 ">In Stock: {stock}</Typography>
                    :
                    <Typography className="mr-4 text-red-400">Out of Stock</Typography>}
          
          <Typography variant="body2" sx={{textAlign:'left'}} color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
        
    </Card>
          </Grid>
                <Grid item sm={3} md={5}>
              <Typography variant="h4" sx={{fontWeight:'800',color:'#06d286',paddingBottom:'20px',marginTop:"30px"}} component="div">
 Order Your Product
</Typography>
              <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
               
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Product Price" defaultValue={user.displayName} {...register("name" ,{required: true })} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Product Price" defaultValue={user.email} {...register("email" ,{required: true })} />)} />
                <Controller 
                control={control}
                render={({ field: {value } }) => (
                <TextField sx={{width:'400px',marginBottom:'10px'}} size="small" value={productName}/> )}/> 
                <Controller 
                control={control}
                render={({ field: {value } }) => (
                    <TextField sx={{ width: '400px', marginBottom: '10px' }} size="small" value={product.price} />)} />
                
                {/* **** */}

                <Controller 
                control={control}
                render={({ field: { value } }) => (
                    <TextField sx={{ width: '400px', marginBottom: '10px' }}
                     placeholder="Quantity" defaultValue="1" {...register("quantity", { required: true })} />)} />
                
                {/* **** */}
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }} placeholder="Address" defaultValue="" {...register("address")} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField placeholder="phone number" sx={{ width: '400px', marginBottom: '10px' }} defaultValue="" {...register("phone")} />)} />
                <Controller 
                control={control}
                render={({ field: { value } }) => (
                <TextField sx={{ width: '400px', marginBottom: '10px' }}
                type="date"
                {...register("test")}
                />)} />
                
                
                <Button variant="contained" style={{ backgroundColor: '#06d286', marginBottom: '40px' }} type="submit">Order Now</Button>
                
                <Link to="/dashboard/myorders" style={{textDecoration:'none',marginLeft:'20px'}}>
                <Button variant="contained" style={{backgroundColor:'blue',marginBottom:'40px'}} type="submit">Review Orders</Button>
                </Link>
        </form>

          </Grid>
        </Grid>
            </Box>
        </Container>
            
    );
};

export default OrderPage;