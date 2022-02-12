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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrder from '../AllOrder/AllOrder';
import AddProduct from '../AddProduct/AddProduct';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AddReviews from '../AddReviews/AddReviews';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AllProducts from '../AllProducts/AllProducts';
import TotalOrder from '../TotalOrder/TotalOrder';
import Alluser from '../Alluser/Alluser';
const drawerWidth = 180;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user } = useAuth()
    const [isAdmin, setIsAdmin] =React.useState(false);
    const [isSeller, setIsSeller] =React.useState(false);
    const {logout} = useAuth()


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    React.useEffect(() => {
        fetch(`https://cryptic-fortress-77677.herokuapp.com/admin/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0]?.role === "admin") {
              setIsAdmin(true);
            } else {
              setIsAdmin(false);
            }
          });
      }, [user?.email]);
      //seller
    React.useEffect(() => {
        fetch(`https://cryptic-fortress-77677.herokuapp.com/seller/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0]?.role === "seller") {
              setIsSeller(true);
            } else {
              setIsSeller(false);
            }
          });
      }, [user?.email]);
    
    const drawer = (
        <div>
            <Toolbar  />
            <Divider />
            <br />
            {
                user &&
                <Box>
                    <Link to="/home" style={{ marginRight:'20px',textDecoration: 'none', textAlign: 'initial', fontSize: '20px' }}> <HomeIcon sx={{mx:2}}/>Home</Link><br /><br/>
           
           <Link to='/products' style={{marginLeft:'8px',textDecoration:'none',fontSize:'20px'}}
           ><Inventory2OutlinedIcon  sx={{mx:2}}/>Products</Link><br /><br/>
           <Link to={`${url}/myorders`}style={{marginLeft:'8px',textDecoration:'none',fontSize:'20px'}}
           ><AddShoppingCartIcon sx={{mx:2}}/>My order</Link><br /><br/>
           
           {/* <Link to={`${url}/addreviews`}style={{marginRight:'20px',textDecoration:'none',fontSize:'18px'}}
           ><BorderColorIcon sx={{ mx:2}}/>Review</Link><br /><br/> */}

                </Box>
            }
            
            {
                isSeller &&
                <Box>
                   <Link to={`${url}/addproduct`} style={{ color: '#e64088', marginLeft: '10px', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}><AddCircleOutlinedIcon sx={{mx:1}}/>Add Product</Link>  <br /><br /> 
                   <Link to={`${url}/order`} style={{ color: '#e64088', marginRight: '20px', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}><ShoppingCartIcon sx={{mx:2}}/>Total Order</Link>  <br /><br/>

                </Box>
            }
            {/* adimn** */}
            {isAdmin &&
                <Box>
                    
                <Link to={`${url}/makeAdmin`} style={{color:'#e64088',marginRight:'10px',marginLeft:'10px',textDecoration:'none',fontSize:'18px',fontWeight:'600'}}><AddModeratorIcon sx={{mx:1}}/>Make seller</Link><br /><br/>
                  
                    <Link to={`${url}/allorder`} style={{ color: '#e64088', marginRight: '20px', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}><ShoppingCartIcon sx={{mx:2}}/>All Order</Link>  <br /><br/>
                    <Link to={`${url}/addproduct`} style={{ color: '#e64088', marginLeft: '10px', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}><AddCircleOutlinedIcon sx={{mx:1}}/>Add Product</Link>  <br /><br />
                    <Link to={`${url}/alluser`} style={{ color: '#e64088', marginLeft: '12px',marginRight: '22px', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}>< PersonOutlineIcon sx={{mx:1}}/>All Users</Link>  <br /><br />
                
                    <Link to={`${url}/allproduct`} style={{ color: 'black', marginLeft: '8px', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}><Inventory2Icon sx={{mx:1}}/>Manage All <br />Products</Link>  <br />
                    
            </Box>
                
            }
           
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
                    <Route path={`${path}/allproduct`}>
                        <AllProducts></AllProducts>
                    </Route>
                    <Route path={`${path}/alluser`}>
                        <Alluser></Alluser>
                    </Route>
                    
                    
                    <Route path={`${path}/order`}>
                        <TotalOrder></TotalOrder>
                    </Route>
                    
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
   
    window: PropTypes.func,
};

export default Dashboard;