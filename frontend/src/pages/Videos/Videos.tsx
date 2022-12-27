import { Container, Box } from "@mui/material";
import { channelVideos } from "../../utils/data/data";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";

const Videos = () => {
  const [videos, setVideos] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => { setVideos(channelVideos) }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <ContainerTitle title='My Youtube Channel Videos' />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <CircularProgress
            size={50}
            sx={{ color: "rgba(58, 173, 144, 0.837)" }}
          />
        </Box>
      ) : (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          {videos.map((video, index) => {
            return (
              <iframe
              key={index}
                style={{ margin: 30, borderRadius: 20 }}
                width="500"
                height="300"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Videos;
