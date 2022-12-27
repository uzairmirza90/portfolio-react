// import React from 'react'
import { Container, Typography } from '@mui/material'
import Experience from '../../containers/Experience/Experience'
import Introduction from '../../containers/Introduction/Introduction'
import Qualification from '../../containers/Qualification/Qualification'
import Skills from '../../containers/Skills/Skills'
import '../Home/Home.scss'
import { aboutUsPage } from '../../utils/data/data'
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle'
import ContactMe from '../../containers/ContactMe/ContactMe'

const Home = () => {
  const { aboutPortfolio, aboutMe } = aboutUsPage;
  return (
    <div>
        <Introduction />
        <Skills />
        <Qualification />
        <Experience />
        <ContactMe />
    </div>
  )
}

export default Home