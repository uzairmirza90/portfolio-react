import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle'
import '../Experience/Experience.scss'
import mernStack from '../../assets/images/mern-stack.png'

const Experience = () => {
  return (
    <Container className='experience'>
        <ContainerTitle title='Experience' />
        <Box className='experience-card'>
            <Typography fontSize={23} fontWeight={600}>
                <span className='hover-color years'>2 Years </span> 
                of Professional Experience in the Industry.
            </Typography>
            <img className="mern-image" src={mernStack} />
        </Box>
        <Divider sx={{marginTop: 8}}/>
    </Container>
  )
}

export default Experience