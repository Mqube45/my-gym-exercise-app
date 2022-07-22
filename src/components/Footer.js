import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box className='footer' mt='80px' p='40px'>
        <Stack gap='40px' justifyContent={'center'} alignItems='center' >
          <Typography p='40px' >
            Made by Appiah Owusu Eugene
          </Typography>
        </Stack>
    </Box>
  )
}

export default Footer 