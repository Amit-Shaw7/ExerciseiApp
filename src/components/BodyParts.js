import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Icons from '../assets/icons/gym.png';
import '../App.css';

const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  // console.log(bodyPart)
  return (
    <Box sx={{ padding: "15px" }}>
      <Stack alignItems="center" justifyContent="center" type="button" className='bodyPart-card' sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        height: "270px",
        width: "280px",
        cursor: "pointer",
        gap: "47px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1650, behavior: "smooth" });
        }}
      >
        <img src={Icons} alt="dumbble" width="40px" height="40px" />
        <Typography fontWeight="bold" fontSize="24px" color="#3A1212" textTransform='uppercase'>
          {item}
        </Typography>
      </Stack>
    </Box>
  )
}

export default BodyParts