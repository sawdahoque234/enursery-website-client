import { Typography,Container, Grid,Box,Button } from '@mui/material';
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
const ManageProduct = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handledelete = product => {
        const url = `http://localhost:5000/products/${product}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
            .then(data => {
            console.log(data)
        if (data.deletedCount) {
            alert('Product Deleted successfully!!!')
            const remaining = products.filter(product => product._id !== product)
            
            setProducts(remaining)
            window.location.reload();
        }
    })

}

    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: '800', color: '#9907ed', paddingBottom: '50px' }} component="div">
                Manage All Product
</Typography>
            {
                products.map(product =>
                    <Box sx={{ flexGrow: 1 }} key={product._id}
                >
                        <Grid container style={{marginBottom:'30px',border:'1px solid gray',borderRadius:'5%'}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            <Grid  xs={2} sm={4} md={3} >
                            <img  src={`data:image/*;base64,${product.image}`} style={{height:'100px',borderRadius:'5%',margin:'20px'}}  alt="" />
                            </Grid>
                            <Grid xs={2} sm={4} md={5} >
                                <Typography variant="h6" sx={{ fontWeight: '800', color: '#06d286', marginTop: '10px' }} component="div">
                                {product.productName}
                                </Typography>
                                
                                <Typography variant="h6">Price: {product.price}.00 Tk </Typography>
                               <Typography variant="body1" sx={{color:'red'}}>In Stock: {product.stock} </Typography>
                                <Typography variant="body2">Seller: {product.sellerName} , {product.city} </Typography>
                                <Typography variant="body2"  color="text.secondary">
                                Product-id:{product._id}
                                 </Typography>
                            </Grid>
                            <Grid xs={2} sm={3} md={4} >
                            <Link to="/dashboard/addproduct" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{ marginRight: '10px', marginTop: '20px' ,backgroundColor:'#9907ed'}}>Add</Button>
                                 </Link>
                                
                                <Button variant="contained" style={{backgroundColor:'#e64088',marginTop: '20px'}} onClick={()=>handledelete(product._id)}>Delete</Button>
                            </Grid>
                   </Grid>
                </Box>)
            }
            </Container>
    );
};

export default ManageProduct;