import { Box} from '@mui/system';
import * as React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HomeProducts from '../HomeProducts/HomeProducts';
import Offer from '../Offer/Offer';
import Reviews from '../Reviews/Reviews';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';



const Home = () => {
    // products to be rendered on the UI
   
   
    return (
        <Box>
            <Banner></Banner>
            <Offer></Offer>
            <HomeProducts></HomeProducts>
            {/* product* */}
            
            <Gallery></Gallery>
            <Team></Team>
            <Reviews></Reviews>

            <Footer></Footer>
 
    </Box>
    );
};

export default Home;
