import useAuth from "../../../hooks/useAuth";
import { Container, Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import React,{useEffect,useState} from 'react';
import { useForm } from "react-hook-form";

const Allusers = () => {
    const [users, setUsers] = useState([]);
    // const [status, setStatus] = useState("");

   
    
    const { user } = useAuth();

   
    
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
            .then(data => {
                setUsers(data)

            
            })
        
        
    }, [user.email])
   
    // const handledelete = order => {
    //     const url = `https://cryptic-fortress-77677.herokuapp.com/orders/${order}`;
    //     fetch(url, {
    //         method:"DELETE"
    //     })
    //     .then(res=>res.json())
    //         .then(data => {
    //         console.log(data)
    //     if (data.deletedCount) {
    //         alert('Are You Sure Deleted This Product???')
    //         const remaining=orders.filter(order=>order._id !==order)
    //         setOrders(remaining)
    //         window.location.reload();
    //     }
    // })
    // }
    
    
    return (
        <Container>
            {/* <h2>Manage All  Orders: {orders.length}</h2> */}
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{color:"blue"}}>User_Id</TableCell>
                            <TableCell style={{color:"blue"}}>Users email</TableCell>
                            
                            <TableCell style={{color:"blue"}} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  scope="row">
                                    {user._id}
                                </TableCell>
                                <TableCell  scope="row">
                                    {user.email}
                                </TableCell>
                                <TableCell  scope="row">
                                    {user.name}
                                </TableCell>
                               
                                
                                
                                
                                        
                            </TableRow>
                        ))}

                        
                    </TableBody>
               
                </Table>
            </TableContainer>
        
        </Container>
    );
};

export default Allusers;