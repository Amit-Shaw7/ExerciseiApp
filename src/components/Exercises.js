import React, { useState, useEffect } from 'react';
import { Pagination, Typography, Box, Stack } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/FetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currPage, setCurrPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currPage * exercisePerPage;
  const indexOfFirstIndex = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstIndex , indexOfLastExercise);

  const paginate = (e , value) => {
    setCurrPage(value);

    window.scrollTo({top:1650 , behavior:"smooth"});
  }

  useEffect(()=> {
    const fetchExercises = async () => {
      let exercisesData = [];

      if(bodyPart === 'all'){
        const url = "https://exercisedb.p.rapidapi.com/exercises";
        exercisesData = await fetchData(url , exerciseOptions);
      }else{
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
        exercisesData = await fetchData(url , exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercises();
    // eslint-disable-next-line
  },[bodyPart])

  return (
    <Box id="exercises" sx={{
      mt: { lg: "110px" }
    }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" color="#3A1212" mb="46px" textAlign="center" >
        Showing Results...
      </Typography>

      <Stack direction="row" sx={{
        gap: { lg: "110px", xs: "50px" },
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        {
          currentExercises.map((exercise, index) => {
            return <ExerciseCard key={index} exercise={exercise} />
          })
        }
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' }}} alignItems="center">
        <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisePerPage)}
          page={currPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </Box>
  )
}

export default Exercises