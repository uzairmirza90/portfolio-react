import { Box } from "@mui/material";
import React from "react";
import '../PageNotFound/PageNotFound.scss'

const PageNotFound = () => {

  return (
    <Box
      className="pagenotfound"
    >
      <div className="sorry">
        <p
          style={{
            color: "rgba(58, 173, 144, 0.837)",
            fontSize: 50,
            fontWeight: 600,
            marginRight: 30,
          }}
        >
          Sorry !!!
        </p>
      </div>
      <div className="page-not-found">
        <p style={{ fontSize: 40, fontWeight: 500 }}>Page Not Found</p>
      </div>
    </Box>
  );
};

export default PageNotFound;
