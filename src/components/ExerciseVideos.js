import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({youtubeVideos, name}) => {

  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}}  p= '20px' >
      <Typography textTransform={'capitalize'} variant='h3' mb='33px' fontFamily= 'Playfair Display'>
        Watch <span style={{color:'#ff2625'}} >{name} </span> exercise videos.
      </Typography>
      <Stack 
        justifyContent={'flex-start'} flexWrap='wrap' 
        alignItems={'center'} sx= {{
          flexDirection:{lg: 'row'},
          gap: {lg: '110px', xs: '0'}
        }} >
        {youtubeVideos?.slice(0, 6).map((item, index) => (
          <a 
            key={index}
            className= 'youtube-video'
            href= {`https://www/youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            >
              <img sx={{height: {lg: '100px', xs: '40px'}}} src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography textTransform='none' color='black' fontFamily= 'Playfair Display' variant='h5' sx={{mb: {lg: '10px', xs: '7px'}}} >
                  {item.video.title}
                </Typography>
                <Typography textTransform='none' color='black' fontFamily= 'Playfair Display' variant='h6' >
                  {item.video.channelName}
                </Typography>
              </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos