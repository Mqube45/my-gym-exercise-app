import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../images/pictures/mainImage.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:'180px', xs:'65px'},
      ml: {sm:'50px'}
    }} position='relative' p='20px' >
      <Typography
      color='#40434A'
      fontWeight="600"
      variant='h4'
      font-family= 'Playfair Display'>
        Fitness World
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: {lg: '44px', xs: '40px'}}}
      mb='27px'
      mt='30px'
      fontFamily='PT Sans Narrow'>
       Strive For Progress <br/> Not Perfection
      </Typography>
      <Typography fontSize='27px'
      lineHeight='34px'
      mb={5}
      fontFamily= 'Playfair Display'>
        Discover the most effective exercises
      </Typography>
      <Button style={{backgroundColor: '#F8CA00', color: 'black', fontSize: '20px' }}
      variant='contained'
      href='#exercises'
      sx={{
        backgroundColor: 'ff2625',
        padding: '10px'
      }}>Explore Exercises</Button>
      <Typography 
       fontWeight={600}
       color='#40434A'
       fontFamily= 'Playfair Display'
       sx={{
        opacity:'0.03',
        display: { lg: 'block', xs: 'none'}
       }}
       fontSize='250px'>Work Out!</Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner