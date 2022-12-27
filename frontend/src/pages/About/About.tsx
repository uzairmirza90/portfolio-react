// import React from 'react'

import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";
import "../About/About.scss";
import { aboutUsPage } from "../../utils/data/data";

const About = () => {
  const { aboutPortfolio, aboutMe } = aboutUsPage;

  return (
    <Container className="about-us-page">
      <ContainerTitle title={aboutPortfolio.title} />
      <Container className="about-portfolio">
        <Typography className="about-portfolio-header">
          {aboutPortfolio.header}
        </Typography>
        <Box className="tech">
          <Box className="tech-container">
            <Typography className="tech-title">
              {aboutPortfolio.tech.frontEndTitle}
            </Typography>
            {aboutPortfolio.tech.frontEnd.map((item, index) => {
              return <li className="tech-name" key={index}>{item.techName}</li>;
            })}
          </Box>
          <Divider orientation="vertical" className="divider" />
          <Box className="tech-container">
            <Typography className="tech-title">
              {aboutPortfolio.tech.backEndTitle}
            </Typography>
            {aboutPortfolio.tech.backEnd.map((item, index) => {
              return <li className="tech-name" key={index}>{item.techName}</li>;
            })}
          </Box>
        </Box>
      </Container>
      <Divider />
      <ContainerTitle title={aboutMe.title} />
      <Container className="about-me about-portfolio">
          <Typography className="about-me-header about-portfolio-header">
            {aboutMe.experience.heading}
          </Typography>
          {aboutMe.experience.details.map((item, index) => {
            return <li className="description" key={index}>{item.desc}</li>
          })}
      </Container>
    </Container>
  );
};

export default About;
