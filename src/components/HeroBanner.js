import React from 'react';
import "../App.css";
import { Box, Typography, Stack, Button } from '@mui/material';
import BannerImage from '../assets/logos/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" }, position: "relative", p: "20px" }}>
      <Typography color="#FF2625" fontWeight={600} fontSize="24px">
        Fitness Club
      </Typography>
      <Typography fontWeight="700px" sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
        Sweat , Rest <br /> And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out and practise the most effective exercise
      </Typography>
      <Button sx={{backgroundColor : "#FF2625"}} href='#exercises' variant='contained' color='error'>
        Explore Exercises
      </Button>
      <Typography letterSpacing="20px" fontSize="140px" fontWeight="600px" color="#FF2625" sx={{opacity:"0.1" , display:{lg:"block" , xs:"none"}}}>
        EXERCISE
      </Typography>
      <img src={BannerImage} alt="Banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner