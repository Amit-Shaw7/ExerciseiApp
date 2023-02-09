import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/FetchData';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercise from '../components/SimilarExercise';
import SimilarEquipment from '../components/SimilarEquipment';


const ExerciseDetails = () => {
  const [exerciseDetails, setExercisesDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExerciseDetails, setSimilarExerciseDetails] = useState([]);
  const [equipmentExerciseDetails, setEquipmentExerciseDetails] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    window.scroll(0, 0);
    const fetchExerciseData = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExercisesDetails(exerciseDetailsData);

      const youtubeSearchData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name} exercises`, youtubeOptions);
      setExerciseVideos(youtubeSearchData.contents);

      const similarExercisesDetailsData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailsData.target}`, exerciseOptions)
      setSimilarExerciseDetails(similarExercisesDetailsData);

      const equipmentExercisesDetailsData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exerciseOptions)
      setEquipmentExerciseDetails(equipmentExercisesDetailsData);
    }
    fetchExerciseData();
    // eslint-disable-next-line
  }, [id])
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <SimilarExercise targetMusDetails={similarExerciseDetails} />
      <SimilarEquipment equipmentExerDetails={equipmentExerciseDetails} />
    </Box>
  )
}

export default ExerciseDetails