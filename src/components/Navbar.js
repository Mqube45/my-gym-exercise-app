import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../images/pictures/Logo.jpg'


const Navbar = () => {
  return (
    <Stack 
    direction='row'
    justifyContent='space-around' 
    sx={{gap: {sm: '122px', xs:'40px' }, mt: {sm:'32px', xs:'20px'}, justifyContent: 'none' }}
    px='20px'>
      <Link to="/">
      <img src={Logo} alt="Logo" style={{
        width: '55px', height: "55px", margin: '0 20px'
      }} />
      </Link>
      <Stack 
        direction='row'
        gap='40px'
        fontSize='30px'
        alignItems='flex-end'>
        <Link to="/" style={
          {textDecoration: 'none', 
          color: '#F8CA00', 
          borderBottom: '3px solid #F8CA00', }}>Home</Link>
        <a href='#exercises' style={
          {textDecoration: 'none',
          color: '#3A1212'}} className='exerciseav' >Exercises</a>
      </Stack>
    </Stack> 
  )
}

export default Navbar  