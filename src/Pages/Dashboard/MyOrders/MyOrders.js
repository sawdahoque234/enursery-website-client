import useAuth from "../../../hooks/useAuth";
import { Typography,Container, Grid,Box,Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import { useParams } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import React,{useEffect,useState} from 'react';
import Radio from '@mui/material/Radio';
import { useForm } from "react-hook-form";

const MyOrders = () => {
    const { id } = useParams();
    const KEY = 'pk_test_51JwJJWDWruHMZxwUglXbLhGZiMaU9YsolRgee685pDwFLGfda9wr10ov7SXgdvH8aZ6bVmadQbJqAOpcCqt8MAxS00HfxccRBH';
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");
        
    const { user } = useAuth();

    // const [product,setProduct] = useState({
    //     name: "reactabbb",price:'22'
    // })

   
    const makePayment = token => {
        const body = {
            token,
        }
        const headers = {
            "Content-Type":"application/json"
        }
        return fetch('https://cryptic-fortress-77677.herokuapp.com/payment', {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("Response", response)
            const { status } = response;
            console.log("Status",status)
        })
        .catch(error=>console.log(error))
    }

    useEffect(() => {
        fetch(`https://cryptic-fortress-77677.herokuapp.com/orders/${user.email}`)
        .then(res=>res.json())
            .then(data => {
                setOrders(data)

            
            })
        
        
    }, [user.email])
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
      };
      const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://cryptic-fortress-77677.herokuapp.com/${orderId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      };
    const handledelete = order => {
        const url = `https://cryptic-fortress-77677.herokuapp.com/orders/${order}`;
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
            <h2>My Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{color:"blue"}}>Product-Name</TableCell>
                            <TableCell style={{color:"blue"}}>Seller</TableCell>
                            <TableCell style={{color:"blue"}}>Seller-City</TableCell>
                            <TableCell style={{color:"blue"}}>Per-Price</TableCell>
                            <TableCell style={{ color: "blue" }}>Quantity</TableCell>
                            <TableCell style={{color:"blue"}}>Total-Price</TableCell>
                            
                            <TableCell style={{color:"blue"}} align="right">Action</TableCell>
                            <TableCell style={{color:"blue"}} align="right">Payment Method</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  scope="row">
                                    {order.order.productName}
                                </TableCell>
                                <TableCell >{order.order.sellerName}</TableCell>
                                <TableCell >{order.order.city}</TableCell>
                                <TableCell >{order.order.price}</TableCell>
                                <TableCell >{order.quantity}</TableCell>
                                <TableCell >{order.order.price * order.quantity}</TableCell>
                                <TableCell >
                                <Button variant="contained" style={{ backgroundColor: '#e64088' }} onClick={() =>handledelete(order._id)}>Cancel</Button></TableCell>
                               
                                <TableCell >
                                <StripeCheckout
                                        name="eNursery.com"
                                        
              billingAddress
              shippingAddress
              description={`Your total is ${order.order.price * order.quantity}`}
              token={makePayment}
              stripeKey={KEY}
            />
                                </TableCell>   
                                
                                <TableCell >
                                <form   onSubmit={handleSubmit(onSubmit)}>
                                    <select style={{ height: '30px'}}
                                onClick={() => handleOrderId(order._id)}
                                {...register("status")}
                                >
                                        <option value={order.status}>{order.status}</option>
                                    <option value="done">Done</option>
                                    </select>
                                    <Button type="submit" variant="contained" style={{backgroundColor:'salmon'}}>COD</Button>
                                </form>
                                </TableCell >
                                    
                                        
                            </TableRow>
                        ))}

                        
                    </TableBody>
               
                </Table>
            </TableContainer>
        
        </Container>
    );
};

export default MyOrders;