import { Box, Container, Typography, Divider} from "@mui/material";
import React from "react";
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";
import "../Qualification/Qualification.scss";
import { qualification } from "../../utils/data/data";


const Qualification = () => {
  const { title, cgpa, image} = qualification;
  return (
    <Container className="qualification">
      <ContainerTitle title="Qualification" />
      <Box className="qualification-card">
        <Typography fontSize={27} color={'white'} fontWeight={600}>
          <span>{title.slice(0, 13)}</span>
          <span className="computer-science">
            {title.slice(13, 30)} &nbsp;&nbsp; (2017-2021)
          </span>
        </Typography>
        <Typography className="convo-image">🎓</Typography>
      </Box>
      <Divider sx={{backgroundColor: 'var(--divider-color)', marginBottom: 10}} />
    </Container>
  );
};

export default Qualification;
