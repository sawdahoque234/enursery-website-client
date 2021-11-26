import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    }, [reviews])
  return (
      <Container>
      
        <Box sx={{ flexGrow: 1}}>
          <Typography variant="h6" style={{marginTop:'70px'}} sx={{fontWeight:'400',color:'info.main'}} component="div">
          Client FeedBack
        </Typography>
          <Typography variant="h3" sx={{fontWeight:500,m:3,color:'#9907ed'}} component="div">
          Our Customers Review
        </Typography>
            <Grid container spacing={{ xs: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review.name}
                            review={review}
                        ></Review>)
        }
      </Grid>
      </Box>
      </Container>
      
    );
};

export default Reviews;