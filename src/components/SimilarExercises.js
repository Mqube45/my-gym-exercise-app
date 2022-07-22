import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({targetMuscle, equipment}) => {
  return (
    <Box p={'20px'} alignItems='center' justifyContent={'center'} textAlign='center' mt='45px' >
      <Typography variant='h4' fontWeight={500} fontFamily= 'Playfair Display' textTransform={'capitalize'} mb='30px' >
        Similar exercises that targets the same muscle
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative'}}  >
        {targetMuscle.length? 
          <HorizontalScrollbar data={targetMuscle} /> : <Loader/>}
      </Stack>
      <Typography variant='h4' fontWeight={500} fontFamily= 'Playfair Display' textTransform={'capitalize'} mb='30px' mt='80px' >
        Similar exercises that requires the same equipment
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative'}}  >
        {equipment.length? 
          <HorizontalScrollbar data={equipment} /> : <Loader/>}
      </Stack>
      
    </Box>
  )
}

export default SimilarExercises