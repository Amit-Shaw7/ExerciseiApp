import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercise = ({ targetMusDetails, equipmentExerDetails }) => {
  return (<>
    <Stack sx={{ marginTop: { lg: "50px", xs: "0px" }, marginBottom: { lg: "50px", xs: "15px" } }}>
      <Box sx={{ position: "relative" }}>
        <Typography color="text.light" variant='h3' textAlign="center" sx={{ fontSize: { lg: "2rem", xs: "25px" }, marginBottom: { lg: "50px", xs: "5px" } }}>
          Execises that target same muscel group
        </Typography>
        {targetMusDetails.length !== 0 ? <HorizontalScrollbar data={targetMusDetails} bodyPart={false} setBodyPart={null} bodyParts={null} /> : <Loader color="#3A1212" />}
      </Box>
    </Stack>
  </>
  )
}

export default SimilarExercise
// <Typography variant='h3' textAlign="center" sx={{ marginBottom: { lg: "60px", xs: "15px" } }}>
//   Exercises that target same equipment
// </Typography>
// <Stack direction="row" sx={{ p: '2', position: "relative" }}>
//   {equipmentExerDetails.length !== 0 ? <HorizontalScrollbar data={equipmentExerDetails} /> : <Loader />}
// </Stack>