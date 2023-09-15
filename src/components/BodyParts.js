import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Icons from '../assets/icons/gym.png';
import '../App.css';
import { FitnessCenter } from '@mui/icons-material';

const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  // console.log(bodyPart)
  return (
    <Box sx={{ padding: "15px" }}>
      <Stack bgcolor="primary.card" alignItems="center" justifyContent="center" type="button" className='bodyPart-card' sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        height: "270px",
        width: "280px",
        cursor: "pointer",
        gap: "20px",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1650, behavior: "smooth" });
        }}
      >
        <FitnessCenter htmlColor='white' sx={{fontSize:"3rem"}}/>
        <Typography fontWeight="bold" fontSize="24px" color="text.secondary" textTransform='uppercase'>
          {item}
        </Typography>
      </Stack>
    </Box>
  )
}

export default BodyParts