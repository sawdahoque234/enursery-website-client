import useAuth from "../../../hooks/useAuth";
import { Container, Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import React,{useEffect,useState} from 'react';
import { useForm } from "react-hook-form";

const AllOrder = () => {
    const [orderId, setOrderId] = useState("");
    const [orders, setOrders] = useState([]);
    // const [status, setStatus] = useState("");
    const { register, handleSubmit } = useForm();

    // status****
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
      };
    
    const { user } = useAuth();

   
    
    useEffect(() => {
        fetch('https://cryptic-fortress-77677.herokuapp.com/orders')
        .then(res=>res.json())
            .then(data => {
                setOrders(data)

            
            })
        
        
    }, [user.email])
   
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
    
    
    return (
        <Container>
            <h2>Manage All  Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{color:"blue"}}>order_Id</TableCell>
                            <TableCell style={{color:"blue"}}>Customers</TableCell>
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
                                    {order.order._id}
                                </TableCell>
                                <TableCell  scope="row">
                                    {order.name}
                                </TableCell>
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
                                <form   onSubmit={handleSubmit(onSubmit)}>
                                    <select style={{ height: '35px',padding:'6px'}}
                                onClick={() => handleOrderId(order._id)}
                                {...register("status")}
                                >
                                        <option value={order.status}>{order.status}</option>
                                    <option value="approved">Approved</option>
                                    <option value="ongoing">On Going</option>
                                    <option value="done">Done</option>
                                    </select>
                                    <Button type="submit" variant="contained" style={{backgroundColor:'salmon'}}>Confirm</Button>
                                </form>
                                </TableCell>    
                                        
                            </TableRow>
                        ))}

                        
                    </TableBody>
               
                </Table>
            </TableContainer>
        
        </Container>
    );
};

export default AllOrder;