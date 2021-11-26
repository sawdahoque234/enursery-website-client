import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';


const Review = ({ review }) => {
  const {image,name,email,description}=review

  
    return (
        <Grid item xs={2} sm={4} md={3}>
        <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
            <img
              style={{ borderRadius: '50%',height:'130px',width:'130px', display: 'block', margin: 'auto' }} 
            src={`data:image/*;base64,${image}`} alt="" />
            <Typography gutterBottom variant="h5" component="div">
             {name}
            </Typography>
            <Typography gutterBottom variant="" sx={{ color: '#e64088' }}>
             {email}
            </Typography>
            <Typography variant="body2" sx={{textAlign:'left',my:2,mx:2}} color="text.secondary">
              {description?.slice(0,160)}
            </Typography>
        </CardActionArea>
         
      </Card>
      </Grid>
              
    );
};

export default Review;