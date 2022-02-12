import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img1 from '../../../imgs/t1.png'
import img2 from '../../../imgs/t2.png'
import img3 from '../../../imgs/t3.jpg'
import img4 from '../../../imgs/b1.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
const Team = () => {
    return (
       
        
        <Box sx={{ flexGrow: 1 }}>
             <Typography variant="h6" style={{marginTop:'60px'}} sx={{fontWeight:'400',color:'info.main',m:2}} component="div">
        Our Service Team
      </Typography>
            <Typography variant="h3" sx={{ fontWeight: 500, m: 3, color: '#9907ed', py: 1 }} component="div">
                Get Any Help and Advise
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
<Grid item xs={2} sm={4} md={3}>
<Card>
<CardActionArea>
<CardMedia
component="img"
height="160"
style={{ borderRadius: '10%', width: '80%', display: 'block', margin: 'auto' }}
image={img1}

/>
<CardContent>
<Typography gutterBottom component="div">
                
<span> <a href='https://www.facebook.com/'><FacebookIcon sx={{color:'#4082ed',fontSize:'30px'}}/></a></span>
<span> <a href='https://www.instagram.com/'><InstagramIcon sx={{color:'#b56328',marginRight:'8px',fontSize:'30px'}}/></a></span>
<span> <a href='https://twitter.com/?lang=en'><TwitterIcon sx={{color:'#4082ed',marginRight:'8px',fontSize:'30px'}}/></a></span>
<span> <a href='https://www.linkedin.com/in/sawdahoque/'><LinkedInIcon sx={{color:'#4082ed',fontSize:'30px'}}/></a></span>

</Typography>
<Typography gutterBottom  sx={{fontWeight:'700',fontSize:'25px'}} component="div">
Mrs Jasmine
</Typography>
<Typography gutterBottom  sx={{fontWeight:'400'}} component="div">
Garden Designer
</Typography>
</CardContent>
</CardActionArea>
</Card>
          </Grid>
<Grid item xs={2} sm={4} md={3}>
<Card>
<CardActionArea>
<CardMedia
component="img"
height="160"
style={{ borderRadius: '10%', width: '80%', display: 'block', margin: 'auto' }}
image={img2}

/>
<CardContent>
<Typography gutterBottom component="div">
<span> <a href='https://www.facebook.com/'><FacebookIcon sx={{color:'#4082ed',fontSize:'30px'}}/></a></span>
                
<span><InstagramIcon sx={{color:'#b56328',marginRight:'8px',fontSize:'30px'}}/></span>
<span><TwitterIcon sx={{color:'#4082ed',marginRight:'8px',fontSize:'30px'}}/></span>
<span><LinkedInIcon sx={{color:'#4082ed',fontSize:'30px'}}/></span>
</Typography>
<Typography gutterBottom  sx={{fontWeight:'700',fontSize:'25px'}} component="div">
Mr Smith Hery
</Typography>
<Typography gutterBottom  sx={{fontWeight:'400'}} component="div">
Garden Specialist
</Typography>
</CardContent>
</CardActionArea>
</Card>
          </Grid>
<Grid item xs={2} sm={4} md={3}>
<Card>
<CardActionArea>
<CardMedia
component="img"
height="160"
style={{ borderRadius: '10%', width: '80%', display: 'block', margin: 'auto' }}
image={img3}

/>
<CardContent>
<Typography gutterBottom component="div">
<span> <a href='https://www.facebook.com/'><FacebookIcon sx={{color:'#4082ed',fontSize:'30px'}}/></a></span>
                
<span><InstagramIcon sx={{color:'#b56328',marginRight:'8px',fontSize:'30px'}}/></span>
<span><TwitterIcon sx={{color:'#4082ed',marginRight:'8px',fontSize:'30px'}}/></span>
<span><LinkedInIcon sx={{color:'#4082ed',fontSize:'30px'}}/></span>
</Typography>
<Typography gutterBottom  sx={{fontWeight:'700',fontSize:'25px'}} component="div">
Mrs Jerry
</Typography>
<Typography gutterBottom  sx={{fontWeight:'400'}} component="div">
Plants Specialist
</Typography>
</CardContent>
</CardActionArea>
</Card>
          </Grid>
<Grid item xs={2} sm={4} md={3}>
<Card>
<CardActionArea>
<CardMedia
component="img"
height="160"
style={{ borderRadius: '10%', width: '80%', display: 'block', margin: 'auto' }}
image={img4}

/>
<CardContent>
<Typography gutterBottom component="div">
<span> <a href='https://www.facebook.com/'><FacebookIcon sx={{color:'#4082ed',fontSize:'30px'}}/></a></span>
                
<span><InstagramIcon sx={{color:'#b56328',marginRight:'8px',fontSize:'30px'}}/></span>
<span><TwitterIcon sx={{color:'#4082ed',marginRight:'8px',fontSize:'30px'}}/></span>
<span><LinkedInIcon sx={{color:'#4082ed',fontSize:'30px'}}/></span>

</Typography>
<Typography gutterBottom  sx={{fontWeight:'700',fontSize:'25px'}} component="div">
Mr Wilson Roy
</Typography>
<Typography gutterBottom  sx={{fontWeight:'400'}} component="div">
Garden Designer
</Typography>
</CardContent>
</CardActionArea>
</Card>
          </Grid>
      </Grid>
    </Box>
  );
};

export default Team;