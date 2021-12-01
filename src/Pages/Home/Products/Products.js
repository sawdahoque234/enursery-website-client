import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';
import { Container } from '@mui/material';
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
    const [page,setPage]=useState(0)
    // products to be rendered on the UI
    const size = 8;
   
    useEffect(() => {
      fetch(`https://protected-taiga-38505.herokuapp.com/products?page=${page}&&size=${size}`)
          .then(res => res.json())
          .then(data => {
              setProducts(data.products);
              setProducts(data.products);
              const count = data.count;
              const pageNumber=Math.ceil(count/size)
              setPageCount(pageNumber)
          });
  }, [page]);
  return (
      <Container>
      
        <Box sx={{ flexGrow: 1}}>
          <Typography variant="h6" sx={{fontWeight:'400',color:'info.main',margin:4}} component="div">
          Our eNursery Product Everyone Can Buy and Sell Products.
        </Typography>
          {/* <Typography variant="h4" sx={{fontWeight:'400',color:'green',m:2}} component="div">
          Our Product
        </Typography> */}
          <Typography variant="h3" sx={{fontWeight:500,m:3,color:'#9907ed'}} component="div">
        </Typography>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
        }
      </Box>
      <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button key={number}
                                className={number===page?'selected':''}
                                onClick={()=>setPage(number)}
                                >

                                    {number+1}</button>)
                    }
                    </div>
      </Container>
      
  );
  
};

export default Products;