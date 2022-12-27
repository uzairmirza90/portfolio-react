import React from "react";
import { Container, Box, Divider, Typography } from "@mui/material";
import "../Project/Project.scss";
import { Skeleton } from "@mui/material";


interface ProjectProps {
  image?: string;
  title?: string;
  description?: string;
  technologies?: string[];
  number: number;
}

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  technologies,
  number,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Box className="project-container">

      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"60%"}
          height={170}
          sx={{ bgcolor: "var(--container-color)", marginTop: 5 }}
        />
      ) : (
        <Container>
        
        <div className="project">
         <img src={image} className='project-image' />
          <div className="project-content-container">
            <div className="project-details">
              <p className="project-title">
                {number + 1}. &nbsp; {title}
              </p>
              {technologies?.map((technology, index) => {
                return <p key={index} className='project-tech'>{technology}</p>;
              })}
              <p className="project-description">
                <Typography component={'span'}>{description}</Typography>
              </p>
            </div>
          </div>
        </div>
        <Divider sx={{marginBottom: 5}} />
        </Container>
      )}
      
    </Box>
  );
};

export default Project;
