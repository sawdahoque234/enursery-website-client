import useAuth from "../../../hooks/useAuth";
import { Typography,Container, Grid,Box,Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import { useParams } from 'react-router';

import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";

const MyOrders = () => {
    const { id } = useParams();
    // const [products, setProducts] = useState([]);
    // const {_id,productName,image,sellerName,city,stock,price} = product;
    

    const [orders, setOrders] = useState([]);
    const { user} = useAuth();
    
    useEffect(() => {
        fetch(`https://protected-taiga-38505.herokuapp.com/orders/${user.email}`)
        .then(res=>res.json())
            .then(data => {
                setOrders(data)
            console.log(orders)

            
            })
        
    }, [user.email])
   
    const handledelete = order => {
        const url = `https://protected-taiga-38505.herokuapp.com/orders/${order}`;
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
   
let total = 0;
for (const order of orders) {
if (!order.quantity) {
order.quantity = 1;
}
total =  order.order.price * order.quantity;
    }
    //payment
    // useEffect(() => {
    //     fetch('https://protected-taiga-38505.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             const matchedProducts = data.find(products => products._id === id)
    //             setProducts(matchedProducts);
    //         })
    // }, [id])
    const purchase =()=>{
        const info = {
            productName: orders?.name,
            image: orders?.image,
            total_amount: orders?.price,
            cus_name: user?.displayName,
            cus_email:user?.email
            
        }
        fetch(`http://localhost:5000/init`,{
            method: 'POST',
            headers:{
                "content-type" :"application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.replace(data)
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
                                <TableCell >{total}</TableCell>
                                <TableCell >
                                <Button variant="contained" style={{ backgroundColor: '#e64088' }} onClick={() =>handledelete(order._id)}>Cancle</Button></TableCell>
                                <TableCell >{order.payment ?
                                    'Paid' :
                                    // <Link to={`/dashboard/payment/${order._id}`}><Button variant="contained" style={{backgroundColor:'blue'}}>Pay</Button></Link>
                                    <Button onClick={purchase} variant="contained" style={{backgroundColor:'blue'}}>Pay</Button>
                                }</TableCell>
                            
                            </TableRow>
                        ))}

                        
                    </TableBody>
                    {/* <p>Total: {total.toFixed(2)}</p>
                    <p>
                        {total.payment ?
                            'Paid' :
                            <Link to={`/dashboard/payment`}><button>Pay</button></Link>}
                    </p> */}
                </Table>
            </TableContainer>
        
        </Container>
    );
};

export default MyOrders;