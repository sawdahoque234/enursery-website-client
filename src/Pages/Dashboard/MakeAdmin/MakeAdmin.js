import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import admin from '../../../imgs/a1.png'
const MakeAdmin = () => {
    const { register, handleSubmit} = useForm();

   
    const adminSubmit = (data) => {
        fetch("http://localhost:5000/makeAdmin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result) )
        console.log(data);
      };
    return (
        <Box>
            <Typography variant="h4" style={{marginBottom:'60px'}}> Make A  Seller</Typography>
            <Grid container  rowSpacing={1}>
                <Grid md={6}>
<img src={admin} style={{width:'70%'}} alt="" />
                </Grid>
                <Grid md="5">
                <form onSubmit={handleSubmit(adminSubmit)}>
            
            <TextField
                        sx={{ width: '60%' }}
                        id="standard-basic"
                        name="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                variant="standard" />
            
            <Button type="submit" style={{margin:'10px'}} variant="contained">Make Seller</Button>
        </form>
                </Grid>
            </Grid>
            
        </Box>
    );
};

export default MakeAdmin;