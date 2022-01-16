import useAuth from "../../../hooks/useAuth";
import { Container, Button, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import React,{useEffect,useState} from 'react';

const AllProducts = () => {
    const [products , setProducts] = useState([]);
   
    const { user } = useAuth();

   
    
    useEffect(() => {
        fetch('http://localhost:5000/aaproducts')
        .then(res=>res.json())
            .then(data => {
                setProducts(data)

            
            })
        
        
    }, [user.email])
   
    const handledelete = product => {
        const url = `http://localhost:5000/allproducts/${product}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
            .then(data => {
            console.log(data)
        if (data.deletedCount) {
            alert('Are You Sure Deleted This Product???')
            const remaining=products.filter(product=>product._id !==product)
            setProducts(remaining)
            window.location.reload();
        }
    })
    }
   
    return (
        <Container>
            <h2>Manage All  Products: {products.length}</h2>
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
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  scope="row">
                                    {product._id}
                                </TableCell>
                                <TableCell  scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell  scope="row">
                                    {product.productName}
                                </TableCell>
                                {/* <TableCell >{productsellerName}</TableCell> */}
                                <TableCell >{product.city}</TableCell>
                                <TableCell >{product.price}</TableCell>
                                <TableCell >
                                <Button variant="contained" style={{ backgroundColor: '#e64088' }} onClick={() =>handledelete(product._id)}>Cancel</Button></TableCell>
                            </TableRow>
                        ))}

                        
                    </TableBody>
               
                </Table>
            </TableContainer>
        
        </Container>
    );
};

export default AllProducts;