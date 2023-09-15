import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Stack direction='row' width="100%" alignItems="center" justifyContent="center">
      <CircularProgress color='primary'/>
    </Stack>
  )
}

export default Loader