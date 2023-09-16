import React from 'react';
import "../App.css";
import { Box, Typography, Button } from '@mui/material';
// import BannerImage from '../assets/logos/banner.png';
import BannerImage from '../assets/images/Hero.png';

const HeroBanner = () => {
  return (
    <Box sx={{ height: { xs: "65vh" }, mt: { lg: "212px", xs: "150px" }, ml: { sm: "50px" }, position: "relative", p: "20px" }}>
      <Typography color="text.light" fontWeight={600} fontSize="24px">
        Fitthub
      </Typography>
      <Typography color="text.light" fontWeight="700px" sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
        Sweat , Rest <br /> And Repeat
      </Typography>
      <Typography color="text.secondary" fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercise
        <br />
        to get in shape
      </Typography>
      <Button href='#exercises' variant='contained' color='primary'>
        Explore Exercises
      </Button>
      <Typography letterSpacing="20px" fontSize="140px" fontWeight="600px" color="text.light" sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}>
        EXERCISE
      </Typography>
      <img src={BannerImage} style={{ objectFit: "cover" }} alt="Banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner