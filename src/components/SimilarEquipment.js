import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarEquipment = ({equipmentExerDetails}) => {
    return (
        <Stack sx={{ marginTop: { lg: "100px", xs: "0px" }, marginBottom: { lg: "100px", xs: "15px" } }}>
            <Box sx={{ position: "relative" }}>
                <Typography variant='h3' color="text.light" textAlign="center" sx={{fontSize:{lg:"2rem" , xs:"25px"} , marginBottom: { lg: "50px", xs: "5px" } }}>
                    Exercises that target same equipment
                </Typography>
                {equipmentExerDetails.length !== 0 ? <HorizontalScrollbar data={equipmentExerDetails} bodyPart={false} setBodyPart={null} bodyParts={null} /> : <Loader/>}
            </Box>
        </Stack>
    )
}

export default SimilarEquipment