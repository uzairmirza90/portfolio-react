import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";
import "../ContactMe/ContactMe.scss";
import { contactMeSection } from "../../utils/data/data";

const ContactMe = () => {
  return (
    <Container className="contact-me-container">
      <ContainerTitle title="Contact Me" />
      <Container className="contact-me">
        {contactMeSection.contact.map((item, index) => {
          return (
            <Box key={index} className="contact-content-container">
              <a href={item.detail}>
                <img src={item.image} className="contact-image" />
              </a>
            </Box>
          );
        })}
      </Container>
    </Container>
  );
};

export default ContactMe;
