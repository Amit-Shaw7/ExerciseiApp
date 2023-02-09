import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import "../App.css";
import { exerciseOptions, fetchData } from '../utils/FetchData';
import { useEffect } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({bodyPart , setBodyPart , setExercises}) => {
  // console.log(process.env.REACT_APP_RAPID_API_KEY);

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
    const fetchCategoryData = async () => {
      const bodyPartsData = await fetchData(url , exerciseOptions);

      setBodyParts(['all' , ...bodyPartsData]);
    }

    fetchCategoryData();
  },[]);

  const handleSearch = async () => {
    const url = "https://exercisedb.p.rapidapi.com/exercises";
    if (search) {
      const exercisesData = await fetchData(url, exerciseOptions);

      const searchedExercises = exercisesData.filter((exercise) => 
        exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        // return exercise;
      );

      setSearch('');
      window.scrollTo({top:1650 , behavior:"smooth"});
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography fontWeight={700} textAlign="center" mb="50px" sx={{ fontSize: { lg: "44px", xs: "30px" } }}>
        Awesome Exercises you should <br /> Know about
      </Typography>

      <Box position="relative" mb="72px">
        <TextField height="76px" value={search} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} placeholder="Search" type="text"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '40px'
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px"
          }}
        />
        <Button className='search-btn' onClick={handleSearch} sx={{
          backgroundColor: "#FF2625",
          textTransform: "none",
          width: { lg: "175px", xs: "80px" },
          fontSize: { lg: "20px", xs: "14px" },
          color: "#fff",
          height: "56px",
          alignItems: "center",
          position: "absolute",
          top: "0px",
          right: "0px"
        }}>
          Search
        </Button>
      </Box>

      <Box sx={{position:"relative" , p:"20px" , width:"100%"}}>
        <HorizontalScrollbar bodyParts data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises