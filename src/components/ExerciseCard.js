import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Box sx={{padding:"10px"}}>
            <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                <Stack direction="row">

                    <Button sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#ffa9a9",
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize"
                    }}>
                        {exercise.bodyPart}
                    </Button>

                    <Button sx={{ 
                        ml: "21px",
                        color: "#fff",
                        background: "#fcc757",
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize"
                    }}>
                        {exercise.target}
                    </Button>

                </Stack>
                <Typography ml="21px" color="#3A1212" fontSize="16px" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
                    {exercise.name.slice(0,25)}
                </Typography>
            </Link>
        </Box>
    )
}

export default ExerciseCard