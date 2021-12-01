import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrder from '../AllOrder/AllOrder';
import AddProduct from '../AddProduct/AddProduct';
import Reviews from '../../Home/Reviews/Reviews';
import AddReviews from '../AddReviews/AddReviews';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user } = useAuth()
    const [isAdmin, setIsAdmin] =React.useState(false);
    const {logout} = useAuth()


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    React.useEffect(() => {
        fetch(`https://protected-taiga-38505.herokuapp.com/admin/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0]?.role === "admin") {
              setIsAdmin(true);
            } else {
              setIsAdmin(false);
            }
          });
      }, [user?.email]);
      console.log(isAdmin);
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/home" style={{marginLeft:'20px',textDecoration:'none',fontSize:'18px'}}>Home</Link><br />
            <Link to={`${url}`} style={{marginLeft:'20px',textDecoration:'none',fontSize:'18px'}}
            >Dashboard</Link><br />
            <Link to={`${url}/myorders`}style={{marginLeft:'20px',textDecoration:'none',fontSize:'18px'}}
            >My order</Link><br />
            <Link to={`${url}/pay`}style={{marginLeft:'20px',textDecoration:'none',fontSize:'18px'}}
            >Pay</Link><br />
            <Link to={`${url}/addreviews`}style={{marginLeft:'20px',textDecoration:'none',fontSize:'18px'}}
            >Review</Link><br />
            {/* adimn** */}
            {isAdmin &&
                <Box>
                <Link to={`${url}/makeAdmin`} style={{color:'#e64088',marginLeft:'20px',textDecoration:'none',fontSize:'18px',fontWeight:'600'}}>Make seller</Link><br />
                  
                <Link to={`${url}/allorder`} style={{color:'#e64088',marginLeft:'20px',textDecoration:'none',fontSize:'18px',fontWeight:'600'}}>All Order</Link>  <br />
                <Link to={`${url}/addproduct`} style={{color:'#e64088',marginLeft:'20px',textDecoration:'none',fontSize:'18px',fontWeight:'600'}}>Add Product</Link>  <br />
                
                
            </Box>}
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor:'#9907ed',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Button onClick={logout}  style={{marginLeft:'800px',backgroundColor:'#06d286 ',paddingTop:'5px'}}  variant="contained">Logout </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addreviews`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/allorder`}>
                        <AllOrder></AllOrder>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProduct
                        ></AddProduct>
                    </Route>
                    
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;