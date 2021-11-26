import useAuth from "../../../hooks/useAuth";
import { Typography,Container, Grid,Box,Button } from '@mui/material';
import React,{useEffect,useState} from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user} = useAuth();
    
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [user.email])
  
    const handledelete = order => {
        const url = `http://localhost:5000/orders/${order}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
            .then(data => {
            console.log(data)
        if (data.deletedCount) {
            alert('Are You Sure Deleted This Product???')
            const remaining=orders.filter(order=>order._id !==order)
            setOrders(remaining)
            window.location.reload();
        }
    })

}
    return (
        <Container>
        <Typography variant="h4" sx={{ fontWeight: '800', color: '#9907ed', paddingBottom: '50px' }} component="div">
            My Order
</Typography>
        {
            orders.map(order =>
                <Box sx={{ flexGrow: 1 }} key={order._id}
            >
                    <Grid container  spacing={{ xs: 2, md: 3 }} style={{marginBottom:'30px'}} columns={{ xs: 4, sm: 8, md: 12 }} >
                        <Grid  xs={2} sm={4} md={3} style={{marginBottom:'20px'}} >
                        <img
              style={{ borderRadius: '10%',height:'150px',width:'80%', display: 'block', margin: 'auto' }} 
              src={`data:image/*;base64,${order.order.image}`}  alt="" />
                        </Grid>
                        <Grid xs={2} sm={4} md={3} >
                            <Typography variant="h5" sx={{textAlign:'left',fontWeight: '600', color: 'green', paddingBottom: '7px', marginTop: '10px' }} component="div">
                            {order.order.productName}
                            </Typography>
                            <Typography variant="body1" style={{color:'black',textAlign:'left'}}>Ordered By :{order.name} </Typography>
                            <Typography variant="h6" sx={{ textAlign:'left',fontWeight: '500', color: 'tomato' }} component="div">
                            Sell By: {order.order.sellerName},{order.order.city}
                            </Typography>
                            
                            
                            
                        </Grid>
                        <Grid xs={2} sm={4} md={3} >
                            
                            <Typography variant="h6" sx={{textAlign:'left',fontWeight:'800',marginTop: '40px'}}>Price: {order.order.price}.00Tk </Typography>
                            
                        </Grid>
                        <Grid xs={2} sm={4} md={3} style={{marginTop:'25px'}}>
                        <Button variant="contained" style={{backgroundColor:'#e64088'}} onClick={()=>handledelete(order._id)}>Delete</Button>
                        <Button variant="contained" style={{marginLeft:'10px'}}>Pay</Button>
                        
                        </Grid>
               </Grid>
            </Box>)
        }
        </Container>
    );
};

export default MyOrders;