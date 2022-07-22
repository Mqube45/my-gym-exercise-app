import React from 'react'
import { Typography, Button, Stack } from '@mui/material'
import BodyPartImage from '../images/icons/body-part.png'
import TargetImage from '../images/icons/target.png'
import EquipmentImage from '../images/icons/equipment.png'


const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },

    {
      icon: TargetImage,
      name: target
    },

    {
      icon: EquipmentImage,
      name: equipment
    }
  ]

  return (
    <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}} >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{gap: {lg: '35px', xs: '20px'}}} >
        <Typography variant='h3' textTransform={'capitalize'} fontFamily= 'Playfair Display' >
          {name}
        </Typography>
        <Typography variant='h5' fontFamily= 'Playfair Display'>
          One key importance of exercises is to improve your health and keep you strong.
          <span style={{textTransform: 'capitalize'}} > {name}</span> is one of the best exercises to target your {target}. 
          <span style={{textTransform: 'capitalize'}} > {name}</span> helps to
          boost your mood, improve blood circulation, increase the muscle mass at your 
          {target} and helps you
          gain energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction='row' alignItems={'center'} >
            <Button sx={{
               background: '#fff2db', borderRadius:'50%', 
               width: '100px', height: '100px', }}>
              <img src={item.icon} alt='Icon' style={{width: '50px', height: '50px'}}/> 
            </Button>
            <Typography 
              marginLeft={'20px'} variant='h5' fontWeight={500}
              textTransform='capitalize' fontFamily= 'Playfair Display' >
                {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail