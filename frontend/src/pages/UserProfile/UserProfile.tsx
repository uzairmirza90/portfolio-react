import { Grid, Box, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../UserProfile/UserProfile.scss";

const UserProfile = () => {
  const [userInfo, setUserInfo] = React.useState<string>("");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") || "").name);
    }
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, []);
  return (
    <Container className="profile-container">
      <div className="profile-content-container">
        <h1 className="welcome">Welcome to the Portfolio!</h1>
        <h1 style={{ color: "rgba(58, 173, 144, 0.837)" }}>
          {userInfo.toUpperCase()}
        </h1>
      </div>
      <div className="gifs">
        <iframe
          src="https://giphy.com/embed/iIqmM5tTjmpOB9mpbn"
          className="gif"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default UserProfile;
