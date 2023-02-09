import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos)
  return (
    <Box sx={{marginBottom:{lg:"50px" , xs:"20px"}}}>
      <Stack sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
        <Typography textTransform='capitalize' textAlign="center" variant="h3" color="#3A1212" marginBottom="50px" sx={{ fontSize: { xs: "30px" } }}>
          Watch <span style={{ color: "#FF2625" }}>"{name}"</span> exercise videos
        </Typography>
        <Stack alignItems="center" justifyContent="space-around" flexWrap="wrap" sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" }
        }}>
          {
            exerciseVideos.length === 0 ? <Loader/> :exerciseVideos.slice(0, 6).map((item, index) => {
              return (
                <Box key={index}>
                  <a className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel='norefferer'>
                    <img src={`${item.video.thumbnails[0].url}`} alt={item.video.title} />
                    <Typography variant='h5' style={{ textDecoration: "none", color: "#FF2625", overflow:"hidden" }}>
                      {item.video.title.slice(0,23)} <br /> <span style={{color:"#3A1212"}}>By - {item.video.channelName}</span>
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