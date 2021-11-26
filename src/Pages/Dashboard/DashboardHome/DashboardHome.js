import { Typography ,Container, Grid} from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import img3 from '../../../imgs/d.png'

const DashboardHome = () => {
    const {user}=useAuth()
    return (
        <Container>
            <Typography variant="h3">Welcome <span style={{color:'#e64088'}}>{user.displayName}</span> in Dashboard</Typography>
            <br />
            <Grid>
                <Grid md={10} xs>
                    <img src={img3} alt="" style={{width:'90%'}} />
                </Grid>
           </Grid>
        </Container>
    );
};

export default DashboardHome;