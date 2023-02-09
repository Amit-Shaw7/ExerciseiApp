import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarEquipment = ({equipmentExerDetails}) => {
    return (
        <Stack sx={{ marginTop: { lg: "100px", xs: "0px" }, marginBottom: { lg: "100px", xs: "15px" } }}>
            <Box sx={{ position: "relative" }}>
                <Typography variant='h3' textAlign="center" sx={{fontSize:{lg:"2rem" , xs:"25px"} , marginBottom: { lg: "160px", xs: "5px" } }}>
                    Exercises that target same <span style={{color:"#FF2625"}}>"equipment"</span>
                </Typography>
                {equipmentExerDetails.length !== 0 ? <HorizontalScrollbar data={equipmentExerDetails} bodyPart={false} setBodyPart={null} bodyParts={null} /> : <Loader/>}
            </Box>
        </Stack>
    )
}

export default SimilarEquipment