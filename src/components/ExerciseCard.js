import React from 'react'
import {Link}  from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`
    }>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
      <Stack direction='row' >
        <Button sx={{
           ml: '21px', color: 'black', 
           background:'#F8CA00', fontSize:'17px', fontFamily:'Playfair Display',
           borderRadius: '20px', textTransform: 'capitalize'}} >
            {exercise.bodyPart}
        </Button>
        <Button sx={{
           ml: '21px', color: 'black', 
           background:'#EFEEEB', fontSize:'17px', fontFamily: 'Playfair Display',
           borderRadius: '20px', textTransform: 'capitalize'}} >
            {exercise.target}
        </Button>
      </Stack>
      <Typography 
        ml='21px' color='#000' fontWeight= 'bold'
        mt='11px' pd= '10px' fontFamily= 'Playfair Display'
        textTransform= 'capitalize' fontSize= '22px'
        >
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard