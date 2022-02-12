import useAuth from "../../../hooks/useAuth";
import { Typography,Container, Grid,Box,Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import { useParams } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import React,{useEffect,useState} from 'react';
import Radio from '@mui/material/Radio';
import { useForm } from "react-hook-form";
import CancelIcon from '@mui/icons-material/Cancel';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Link } from "react-router-dom";
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
    
    
    // const shipping = order.quantity > 0 ? 15 :0;
    // const tax = (order.total + shipping) * 0.10;
    
    
    return (
        <Container>
            <h2>My Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{color:"blue"}}>Product-Name</TableCell>
                            <TableCell style={{color:"blue"}}>Seller-Name</TableCell>
                            <TableCell style={{color:"blue"}}>Seller-City</TableCell>
                            <TableCell style={{color:"blue"}}>Per-Price</TableCell>
                            <TableCell style={{ color: "blue" }}>Quantity</TableCell>
                            <TableCell style={{ color: "blue" }}>Shipping</TableCell>
                            <TableCell style={{color:"blue"}}>Total-Price</TableCell>
                            
                            <TableCell style={{color:"blue"}} align="right">Cancel</TableCell>
                            <TableCell style={{color:"blue"}} align="right">Review</TableCell>
                            <TableCell style={{color:"blue"}} align="right">Payment Method</TableCell>
                            <TableCell style={{color:"blue"}} align="right">Payment Method</TableCell>
                            <TableCell style={{color:"blue"}} align="right">Return Product</TableCell>
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
                                <TableCell >{50}</TableCell>
                                <TableCell >{order.order.price * order.quantity+50}</TableCell>
                                <TableCell >
                                <p variant="contained"  onClick={() =>handledelete(order._id)}><CancelIcon sx={{fontSize:'30px'}} /></p></TableCell>
                                <TableCell >
                                <Link to="/dashboard/addreviews"><RateReviewIcon sx={{fontSize:'30px'}} /></Link></TableCell>
                                <TableCell >
                                <StripeCheckout
                                        name="eNursery.com"
              billingAddress
              shippingAddress
              description={`Your total is ${order.order.price * order.quantity+50}`}
              token={makePayment}
              stripeKey={KEY}
            /><br/>
          
            
                                </TableCell>   
                                <TableCell>  
                                  <form   onSubmit={handleSubmit(onSubmit)}>
                                  <select style={{ height: '35px',marginTop:'7px'}}
                              onClick={() => handleOrderId(order._id)}
                              {...register("status")}
                              >
                                      <option value={order.status}>{order.status}</option>
                                  <option value="done">Done</option>
                                  </select>
                                  <Button type="submit" variant="contained" style={{backgroundColor:'salmon'}}>Cash</Button>
                              </form> 
                                </TableCell>   



                                {/* //order */}
                                <TableCell >
                                <form   onSubmit={handleSubmit(onSubmit)}>
                                    <select style={{ height: '35px',marginTop:'7px'}}
                                onClick={() => handleOrderId(order._id)}
                                {...register("return")}
                                >
                                        <option value={order.return} style={{marginRight:'20px'}}>{order.return}</option>
                                    <option value="yes">yes</option>
                                    </select>
                                    <Button type="submit" variant="contained" style={{backgroundColor:'salmon'}}>Done</Button>
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