import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Navigation from './Shared/Navigation/Navigation';
// import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import Orderpage from './OrderPage/OrderPage';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Home/Footer/Footer';
import AboutSection from './Pages/Home/AboutSection/AboutSection';
import Contact from './Pages/Home/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Reviews from './Pages/Home/Reviews/Reviews';
import HomeProducts from './Pages/Home/HomeProducts/HomeProducts';
import Gallery from './Pages/Home/Gallery/Gallery';
import Team from './Pages/Home/Team/Team';
import NotFound from './Pages/Home/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
      <Switch>
            <PrivateRoute path="/orderpage/:productId">
              <Orderpage></Orderpage>
          </PrivateRoute>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            
            <Route path="/aboutsection">
              <AboutSection></AboutSection>
          </Route>
          
            <Route path="/reviews">
              <Reviews></Reviews>
          </Route>
          
            
            <Route path="/register">
            <Register></Register>
          </Route>
            <Route path="/homeproducts">
              <HomeProducts></HomeProducts>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
          </Route>
            <Route path="/team">
              <Team></Team>
          </Route>
           
          <Route path="/footer">
              <Footer></Footer>
          </Route>
           {/* ****notfound** */}
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          {/* ****notfound** */}
          </Switch>
        </Router>
</AuthProvider>

    </div>
  );
}

export default App;
