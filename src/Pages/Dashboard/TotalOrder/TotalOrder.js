import useAuth from "../../../hooks/useAuth";
import { Container, Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import React,{useEffect,useState} from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { useForm } from "react-hook-form";

const TotalOrder = () => {
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
                            <TableCell style={{color:"blue"}}>Customers</TableCell>
                            <TableCell style={{color:"blue"}}>Product-Name</TableCell>
                            <TableCell style={{color:"blue"}}>Per-Price</TableCell>
                            <TableCell style={{ color: "blue" }}>Quantity</TableCell>
                            <TableCell style={{ color: "blue" }}>Shipping</TableCell>
                            <TableCell style={{color:"blue"}}>Total-Price</TableCell>
                            <TableCell style={{color:"blue"}}>Return</TableCell>
                            <TableCell style={{color:"blue"}}>Status</TableCell>
                            <TableCell style={{color:"blue"}}>Cancel</TableCell>
                            

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                
                                <TableCell  scope="row">
                                    {order.name}
                                </TableCell>
                                <TableCell  scope="row">
                                    {order.order.productName}
                                </TableCell>
                                <TableCell >{order.order.price}</TableCell>
                                <TableCell >{order.quantity}</TableCell>
                                <TableCell >{50}</TableCell>
                                <TableCell >{order.order.price * order.quantity+50}</TableCell>
                                <TableCell >{order.return}</TableCell>
                                <TableCell >

<form   onSubmit={handleSubmit(onSubmit)}>
    <select style={{ height: '35px',padding:'6px'}}
onClick={() => handleOrderId(order._id)}
{...register("status")}
>
<option value={order.status}>{order.status}</option>
                                    <option value="approved">Approved</option>
                                    <option value="done">pending</option>
                                    <option value="done">done</option>
    </select>
    <Button type="submit" variant="contained" style={{backgroundColor:'salmon'}}>Confirm</Button>
</form>
</TableCell >
                                <TableCell >
                               
                                <p variant="contained"  onClick={() =>handledelete(order._id)}><CancelIcon sx={{fontSize:'30px'}} /></p></TableCell>
                                
                               
                                        
                            </TableRow>
                        ))}

                        
                    </TableBody>
               
                </Table>
            </TableContainer>
        
        </Container>
    );
};

export default TotalOrder;