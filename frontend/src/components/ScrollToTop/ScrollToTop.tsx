import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, Button } from "@mui/material";

const ScrollToTop: React.FC = () => {
  const [scrollToTop, setScrollToTop] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box>
      {scrollToTop && (
        <Button
          variant="contained"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            height: "50px",
            width: "10px",
            fontSize: "1px",
            backgroundColor: 'rgb(127, 208, 184)',
            color: "white",
            border: "none",
          }}
          onClick={() => scrollUp()}
        >
          <ArrowUpwardIcon fontSize="large"/>
        </Button>
      )}
    </Box>
  );
};

export default ScrollToTop;
