import useAuth from "../../../hooks/useAuth";
import { Container, Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import React,{useEffect,useState} from 'react';
import { useForm } from "react-hook-form";

const Alluser = () => {
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
            <h2>All  Users: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{color:"blue"}}>User_Name</TableCell>
                            <TableCell style={{color:"blue"}}>User_Email </TableCell>
                            <TableCell style={{color:"blue"}}>User_Address </TableCell>
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
                                    {order.email}
                                </TableCell>
                                <TableCell  scope="row">
                                    {order.address}
                                </TableCell>
                                

                                <TableCell >
                                <Button variant="contained" style={{ backgroundColor: '#e64088',marginRight:'20px' }} onClick={() =>handledelete(order._id)}>Cancel</Button>
                                
                                <Button variant="contained" style={{ backgroundColor: '#41469c' }} >Update</Button></TableCell>

                              
                                        
                            </TableRow>
                        ))}

                        
                    </TableBody>
               
                </Table>
            </TableContainer>
        
        </Container>
    );
};

export default Alluser;