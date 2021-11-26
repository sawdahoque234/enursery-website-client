import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography ,Container} from '@mui/material';

const Gallery = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{fontWeight:'400',color:'info.main',m:2,pt:2}} component="div">
          Our Gallery
        </Typography>
          <Typography variant="h3" sx={{fontWeight:500,m:3,color:'#9907ed',py:1}} component="div">
          Captured Moments From Customers
        </Typography>
        <Box sx={{ width: '75%',display:'block',margin:'auto' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
            </Box>
        </Container>
            
    );
  }
  
  const itemData = [
    {
      img: 'https://media.istockphoto.com/photos/mother-and-daughter-planting-flowers-and-herbs-in-the-pots-on-the-picture-id1221468847?k=20&m=1221468847&s=612x612&w=0&h=R9WpBkE5TH1mzaQjaaz0sIrNHM1TbnF0cjNb3On8sEI=',
      title: 'Bed',
    },
    {
      img: 'https://media.istockphoto.com/photos/young-woman-caring-for-flowers-in-the-greenhousehobby-work-and-picture-id949495362?k=20&m=949495362&s=612x612&w=0&h=Qp_N1nQVfmqpCtvunLYRgmt9fGlDHnuvj3xwYAAwU4I=',
      title: 'Books',
    },
    {
      img: 'https://media.istockphoto.com/photos/smiling-parents-and-children-standing-in-their-vegetable-garden-picture-id1189988933?k=20&m=1189988933&s=612x612&w=0&h=_Di6s2xqcqUIEuryp09wEmmWsTzHYX3JJy7ebpO16Ew=',
      title: 'Sink',
    },
    {
      img: 'https://media.istockphoto.com/photos/two-smiling-gardeners-holding-pots-with-evergreen-trees-and-it-on-picture-id1296928980?k=20&m=1296928980&s=612x612&w=0&h=mSP_8FacVjdly9J0LQBjWriC4kn8fW9ryPBicn4zBAA=',
      title: 'Kitchen',
    },
    {
      img: 'https://media.istockphoto.com/photos/woman-gardening-in-greenhouse-picture-id1130531616?k=20&m=1130531616&s=612x612&w=0&h=ZI0bH6IctB5OJOpVCInEA8QrpFpRxcG7TyCUUTunBGM=',
      title: 'Blinds',
    },
    {
      img: 'https://media.istockphoto.com/photos/loving-all-the-colors-of-the-flower-picture-id1311573326?k=20&m=1311573326&s=612x612&w=0&h=wdkbVO7OCv7tCOY3IVS_XRIiIxzeIeBToNU7blAaoH4=',
      title: 'Chairs',
    },
    {
      img: 'https://media.istockphoto.com/photos/smiling-customer-walking-along-path-in-garden-center-between-rows-of-picture-id1214917515?k=20&m=1214917515&s=612x612&w=0&h=rJPLPTGkcLYodzH8uH-agjdrmik-wru8O6hsbx2sInM=',
      title: 'Laptop',
    },
    {
      img: 'https://media.istockphoto.com/photos/smiling-vietnamese-woman-shopping-for-planted-flowers-at-a-nursery-picture-id542204934?k=20&m=542204934&s=612x612&w=0&h=BrcQZaFfLgkVYyBY47BWSHyd7zBuNeFGvOsJAVz09fY=',
      title: 'Doors',
    },
    {
      img: 'https://media.istockphoto.com/photos/young-handsome-couple-buying-flowers-picture-id1248202439?k=20&m=1248202439&s=612x612&w=0&h=azu9N8bpRyOZB_mGFRBqIw4yCwnrLJYW1DR5sRIvkGg=',
      title: 'Coffee',
    },
    {
      img: 'https://media.istockphoto.com/photos/woman-at-groceries-store-picture-id175210396?k=20&m=175210396&s=612x612&w=0&h=P_XWyiAYxYxRyylOxRJKjx1AGaDNOWN4gsJdEMDMLWY=',
      title: 'Storage',
    },
    {
      img: 'https://media.istockphoto.com/photos/woman-planting-flowers-picture-id948030390?k=20&m=948030390&s=612x612&w=0&h=ZxSAZIP80leUwan7TpNADLR3ce-GbdfRpQwseRcEsKQ=',
      title: 'Candle',
    },
    {
      img: 'https://media.istockphoto.com/photos/girl-holds-hydrangea-in-a-pot-at-a-flower-shop-picture-id1240462758?k=20&m=1240462758&s=612x612&w=0&h=9Q9mC_J-DzRB3xNPD_Okl9nKJZei3db-7GUcM2X5jqE=',
      title: 'Coffee table',
    },
    {
      img: 'https://media.istockphoto.com/photos/portrait-of-mother-and-son-at-a-garden-center-looking-at-the-camera-picture-id869313536?k=20&m=869313536&s=612x612&w=0&h=Up2hhVEzbQniDH66N-wKugWTpglSjaBL47BRtxUHAZU=',
      title: 'Coffee table',
    },
    {
      img: 'https://media.istockphoto.com/photos/young-couple-in-greenhouse-working-with-flowers-picture-id994982392?k=20&m=994982392&s=612x612&w=0&h=pMrOnV9l0g1vN-punPKVxLQY-aKwbxVLDvx24fGpib8=',
      title: 'Coffee table',
    }
  ];

export default Gallery;