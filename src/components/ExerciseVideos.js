import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos)
  return (
    <Box sx={{ marginBottom: { lg: "50px", xs: "20px" } }}>
      <Stack sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
        <Typography textTransform='capitalize' textAlign="center" variant="h3" color="text.light" marginBottom="50px" sx={{ fontSize: { xs: "30px" } }}>
          Watch {name} exercise videos
        </Typography>
        <Stack alignItems="center" justifyContent="space-around" flexWrap="wrap" sx={{
          flexDirection: { lg: "row" },
        }}>
          {
            exerciseVideos.length === 0 ? <Loader /> : exerciseVideos.slice(0, 6).map((item, index) => {
              return (
                <Box key={index}>
                  <a className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel='noreferrer'>
                    <img src={`${item.video.thumbnails[0].url}`} alt={item.video.title} />
                    <Typography color="text.light" fontSize="1.2rem" variant='subtitle1' className='removeilink-style'>
                      {item.video.title?.slice(0, 35)}
                      <br />
                      <Box color="text.light" component="span" fontSize="0.9rem">By - {item.video.channelName?.slice(0, 25)}</Box>
                    </Typography>
                  </a>
                </Box>
              )
            })
          }
        </Stack>
      </Stack>
    </Box>
  )
}

export default ExerciseVideos