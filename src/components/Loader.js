import { Box, Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
        <Stack direction='row' width="100%" alignItems="center" justifyContent="center">
            <InfinitySpin color='red'/>
        </Stack>
  )
}

export default Loader