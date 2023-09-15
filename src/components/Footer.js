import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="text.card" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      sx={{ width: "100vw", height: { lg: "60px", xs: "60px" } }}>
      <Typography color="#fff" sx={{ fontSize: { xs: "15px" } }} >
        ©Copyrigth @ AS Fitness - 2020-2022
      </Typography>
    </Box>
  )
}

export default Footer